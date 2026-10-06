/**
 * 911D - Free Tools menu (header dropdown + footer links)
 * Adds "Free Tools" to the site's custom header menu (#d911-nav), just before Blog, with the decoders in a dropdown,
 * and adds the same links to the footer's Services column. It edits the page HTML as it is sent; no theme file is changed.
 * The X-ray Decoder link appears automatically once /dental-xray-decoder/ is published.
 * To undo: deactivate this snippet, then purge the SiteGround cache.
 */
add_action( 'template_redirect', function () {
	if ( is_admin() || wp_doing_ajax() || is_feed() || is_embed() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
		return;
	}
	$tools = array( array( 'Treatment Plan Decoder', home_url( '/dental-treatment-plan-decoder/' ) ) );
	$xray  = get_page_by_path( 'dental-xray-decoder' );
	if ( $xray && 'publish' === $xray->post_status ) {
		$tools[] = array( 'X-ray Decoder', get_permalink( $xray ) );
	}
	$items = '';
	foreach ( $tools as $t ) {
		$items .= '<li><a href="' . esc_url( $t[1] ) . '">' . esc_html( $t[0] ) . '</a></li>';
	}
	$blog_li = '<li><a href="' . esc_url( home_url( '/blog/' ) ) . '">Blog</a></li>';

	ob_start( function ( $html ) use ( $tools, $items, $blog_li ) {
		if ( ! is_string( $html ) || false === strpos( $html, '<ul class="d911-nav-links">' ) || false !== strpos( $html, 'd911-tools-sub' ) ) {
			return $html;
		}
		// Header: one "Free Tools" item before Blog, inside the header menu list only.
		$start = strpos( $html, '<ul class="d911-nav-links">' );
		$end   = strpos( $html, '</ul>', $start );
		if ( false !== $end ) {
			$blog = strpos( $html, $blog_li, $start );
			$at   = ( false !== $blog && $blog < $end ) ? $blog : $end;
			$li   = '<li class="d911-tools-item"><a href="' . esc_url( $tools[0][1] ) . '">Free Tools</a><ul class="d911-tools-sub">' . $items . '</ul></li>';
			$html = substr_replace( $html, $li, $at, 0 );
		}
		// Footer: add the decoders to the Services column, after "Find a Dentist".
		$col = strpos( $html, 'class="d911-footer-col"' );
		if ( false !== $col ) {
			$needle = 'Find a Dentist</a></li>';
			$f      = strpos( $html, $needle, $col );
			$f_end  = strpos( $html, '</ul>', $col );
			if ( false !== $f && false !== $f_end && $f < $f_end ) {
				$html = substr_replace( $html, $items, $f + strlen( $needle ), 0 );
			}
		}
		// Styles: dropdown on desktop, indented list in the mobile menu.
		$css = '<style id="d911-free-tools-css">'
			. '.d911-nav-links .d911-tools-item{position:relative}'
			. '.d911-nav-links .d911-tools-item>a::after{content:"";display:inline-block;margin-left:6px;border:4px solid transparent;border-top-color:currentColor;transform:translateY(2px)}'
			. '.d911-nav-links .d911-tools-sub{list-style:none;margin:0;padding:8px 0;position:absolute;top:100%;left:-16px;min-width:230px;background:rgba(11,15,26,.97);border:1px solid rgba(255,255,255,.1);border-radius:10px;box-shadow:0 14px 32px rgba(0,0,0,.4);display:none;z-index:10000}'
			. '.d911-nav-links .d911-tools-item:hover>.d911-tools-sub,.d911-nav-links .d911-tools-item:focus-within>.d911-tools-sub{display:block}'
			. '.d911-nav-links .d911-tools-sub li{margin:0}'
			. '.d911-nav-links .d911-tools-sub a{display:block;padding:10px 18px;white-space:nowrap}'
			. '@media (max-width:900px){'
			. '.d911-nav-links .d911-tools-item>a::after{display:none}'
			. '.d911-nav-links .d911-tools-sub{position:static;display:block;min-width:0;padding:0 0 8px 16px;background:none;border:0;border-radius:0;box-shadow:none}'
			. '.d911-nav-links .d911-tools-sub li{border-bottom:0}'
			. '.d911-nav-links .d911-tools-sub a{padding:9px 0;font-size:15px}'
			. '}</style>';
		$head = stripos( $html, '</head>' );
		if ( false !== $head ) {
			$html = substr_replace( $html, $css, $head, 0 );
		}
		return $html;
	} );
}, 1 );
