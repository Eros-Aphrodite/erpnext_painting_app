// Copyright (c) 2026, qfinishes and contributors
// For license information, please see license.txt

frappe.ui.form.on("Painting Inspection", {
	refresh(frm) {
		// Keep all Painting Inspection tabs visible and remove the extra auto
		// \"Details\" tab that Frappe sometimes inserts.
		setTimeout(() => {
			const $wrapper = $(frm.wrapper);
			const $tabs_list = $wrapper.find(".form-tabs-list");

			if (!$tabs_list.length) {
				return;
			}

			// Remove Frappe's auto \"__details\" tab if present.
			const $autoDetails = $tabs_list
				.find('.nav-link[data-fieldname=\"__details\"]')
				.closest(\".nav-item\");
			if ($autoDetails.length) {
				const targetId = $autoDetails.find(\".nav-link\").attr(\"href\");
				$autoDetails.remove();
				if (targetId) {
					$wrapper.find(targetId).remove();
				}
			}

			// Show every remaining tab header (Details, INTERIOR, EXTERIOR).
			$tabs_list.find(\".nav-item\").each((_, el) => {
				const $item = $(el);
				$item.removeClass(\"hide\").addClass(\"show\");
			});

			// Ensure each tab pane itself is not force-hidden.
			$wrapper.find(\".form-tab-content .tab-pane\").each((_, el) => {
				const $pane = $(el);
				$pane.removeClass(\"hide\");
			});

			// Make sure at least one tab is active.
			const $active_link = $tabs_list.find(\".nav-link.active\");
			if (!$active_link.length) {
				const $first = $tabs_list.find(\".nav-link\").first();
				if ($first.length) {
					$first.tab(\"show\");
				}
			}
		}, 0);
	},
});

