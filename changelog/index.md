# Changelog

We regularly make updates to Parcelcraft shipping. This page logs the evolution of the Parcelcraft Shipping app.

---

## 2.3.0 {% small %}September 8, 2026{% /small %}

- Added: Packing slips are now available for labels created from checkout sessions and payment links, in addition to invoices
- Fixed: Selecting a carrier's published packaging (for example USPS SoftPack) no longer appears to lose the selection. Previously the packaging picker was swapped out for length, width, and height fields, which read as the choice being dropped. The picker now stays on screen in every package editor (shipment drawer, bulk shipping, shipping rate defaults, and settings), and dimension fields only appear as a second row when the package actually needs them
- Fixed: Dimensions are now required only where the carrier needs them: custom-size packages, the generic "Parcel"/"Package" codes, and DHL Express boxes. USPS, FedEx, and UPS rate their published packaging by code alone, so their metadata size notes ("Varies based on service level") no longer force dimension entry
- Fixed: USPS could reject a pickup request with "An invalid address was entered" when the saved warehouse address had a placeholder in address line 2 (such as "0"). Pickup addresses are now cleaned before submission: blank fields and placeholder-only unit lines are dropped, phone numbers are normalized, and only the fields the carrier accepts are sent
- Fixed: Scheduling a pickup in the evening could request the wrong day. The date list was built from the UTC calendar date, which is already tomorrow every evening in the Americas, so an option labeled "Saturday" could request a Sunday pickup that USPS has no rates for. Dates now use your local calendar
- Added: The pickup form now shows which time zone the pickup window is interpreted in (for example "Eastern Daylight Time (America/New_York)")
- Added: Scan forms can now be created in test mode, using your test labels, so the end-of-day manifest flow can be tried before going live. A note explains that test forms cover test labels only and can't be handed to a carrier
- Added: A "Search shipments from" selector on the scan form view lets you widen the window from the past day up to the past 30 days when looking for un-manifested shipments, and the scan form history follows the same window
- Fixed: When more than 100 un-manifested shipments were found, the scan form view only grouped the last page of results. All pages are now included
- Improved: Scan form history rows were restyled, with the shipped-from address and tracking numbers grouped in the info tooltip
- Improved: Carrier timeouts and outages now show a clear message ("The carrier took too long to respond and the request timed out. Please try again in a moment." or "The shipping service is temporarily unavailable") instead of a bare "504 / Request failed"

---

## 2.2.8 {% small %}September 2, 2026{% /small %}

- Added: FedEx Wallet carrier account — renamed from FedEx Ground — now offers the full standard FedEx service lineup — Ground, Home Delivery, 2Day, overnight, and international services, with matching shipment options — instead of being limited to Ground Economy due to a recent EasyPost update
- Added: UPS predefined packaging (UPS letter, express boxes, tubes, and Paks) is now available on UPS accounts created through Parcelcraft, which previously showed no packaging choices
- Added: Improved logging for shipments with errors. This will help us improve Parcelcraft for future users.
- Fixed: Return shipments now show the correct address labels: Return to / Return from, rather than "Ship from / Ship to"
- Fixed: DHL Express Account and DHL eCommerce Account carriers now show a domestic service warning: these carriers are not used for shipping within the US
- Fixed: DHL Express wallet accounts (which support US exports only) no longer list domestic services that could never return a rate
- Fixed: DHL eCommerce shipments now automatically include the merchant name the carrier requires on the label
- Fixed: Selecting a DHL Express box could quote at the bare-minimum parcel rate because the box dimensions were never sent to the carrier. Choosing a DHL box now fills in its standard dimensions automatically, and measurements you enter yourself always take priority
- Fixed: "Quote all carriers" could silently return rates from only one carrier when a carrier-specific package type was selected, because every other carrier declined the request. Cross-carrier quotes now send only neutral package details (weight and dimensions) so every carrier can answer
- Fixed: FedEx Wallet shipments can only bill the sender, so third-party and receiver billing options are no longer offered on wallet accounts. Selecting them previously caused every rate to be declined without explanation
- Fixed: When a carrier declines to quote, its error message now appears next to the rate picker, so an empty rate list always comes with a reason
- Fixed: FedEx International Priority was mislabeled "FedEx International (First)" in service menus, making it indistinguishable from the more expensive FedEx International First service
- Fixed: Package dimensions of zero left over from older saved package defaults no longer cause carriers to reject quotes; invalid dimensions are corrected automatically when the shipment is submitted

---

## 2.2.7 {% small %}August 31, 2026{% /small %}

- Fixed: Checkout custom fields (company name, custom label text) were not applied to shipments from one-time payment link purchases with invoices, including 1-click shipments and test labels.
- Fixed: Resolved a timeout when loading carrier settings for accounts with no connected carriers, or a specific subset of carriers, and improved the error shown when carriers can't be loaded

---

## 2.2.3 {% small %}August 27, 2026{% /small %}

- Fixed: DHL Express services — including DHL Express Worldwide and the NonDoc services — now appear correctly on international shipments
- Fixed: If Parcelcraft ever can't tell which of a carrier's services fit your destination, it now shows all of them instead of hiding the carrier
- Added: DHL Express lithium-battery (hazmat) shipment options
- Fixed: The image preview of the label would appear broken before printing

---

## 2.2.1 {% small %}August 26, 2026{% /small %}

- Added: Some international addresses ambiguously need customs information, so we now offer an escape hatch for these requirements.  Users can now choose to add or remove customs information when shipping between some locations.  Customs requirements can vary by carrier and requirement, even in the same country, for example, shipping between US military addresses and US States, and shipping between some European countries (like French Guiana and France)
- Fixed: In the Full Page view: Using custom column sort order or custom column view configuration would not work if the user's settings were not correct. We now self-heal malformed configurations.
- Updated: Upgraded to Stripe Apps SDK v9.2.1

---

## 2.1.3 {% small %}August 19, 2026{% /small %}

- Fixed: Address line 2 was not correctly applied to all shipment create flows
- Fixed: Address changes made after verification (for example an added company name or custom label fields) were silently dropped from purchased labels. The full address is now always submitted when buying a label, so post-verification edits are kept.
- Fixed: Every address was treated as residential, which could add residential surcharges to shipments sent to commercial addresses. The carrier's verified residential/commercial determination is now preserved.
- Fixed: The third custom label text field (Print custom 3) was hidden for FedEx shipments, so its text never reached the label.
- Fixed: Return, Test label, and Voided badges were missing from the shipment history list; they are now shown again alongside the shipment status.

---

## 2.1.0 {% small %}August 17, 2026{% /small %}

### Breaking change

- Documentation, label printing, and account links are now served from <www.parcelcraft.com> on our new website. account.parcelcraft.com and docs.parcelcraft.com are no longer used — sign-in, session, dashboard, docs, and label URLs all point at the new domain, and the app's connect/image permissions were updated to match.

### Fixed

- Payment status badges were the wrong color everywhere in the compact order view — every badge rendered gray, including Unpaid. Unpaid is now red, and refunded/partially refunded are amber.
- Bulk shipments to countries that don't use states/provinces or postal codes were blocked by "State required" / "ZIP code required" errors, even though the address form correctly hides those fields.
- FedEx's custom label text fields (Print custom 1 and 2) and the Alcohol option were hidden even on carriers that support them.
- Product and shipping rate names in Settings opened a broken link; they now open the item in your Stripe dashboard.
- Order and shipment lists could error out instead of rendering when currency or date information was unavailable.

### Improved

- Column choices for the Orders and Shipment history tables now save to your Parcelcraft account instead of only the browser, so your layout follows you between browsers and survives a reload. Changes save as you make them rather than only when you leave the page, and the table no longer flashes a loading spinner while settings load.
- Toolbar on the Orders page restyled — Create shipment is now the primary action.

---

## 2.0.0 {% small %}August 11, 2026{% /small %}

Our largest update yet: this release introduces the new full-page Parcelcraft experience in the Stripe dashboard, with a unified orders list, bulk shipping, and carrier-aware shipment options.

- Added: A full-page version of Parcelcraft in the Stripe dashboard. The full-page app presents a unified Orders list built from your payments and invoices, with tabs to create shipments and browse your shipment history — no more working only from a side drawer.
- Added: Bulk shipping. Select multiple orders in the full-page Orders list to quote, buy, and print many shipping labels in one flow. A summary footer guides each step: get quotes, select rates, review customs where required, buy labels, then print every label at once.
- Added: A new shipment focus view for preparing one or many shipments, with an editable package section, customs panel, shipment options, rate selection, and contextual actions that follow the state of each shipment.
- Added: Orders can be filtered by shipping status, date range, and product, with live status counts (for example Unshipped and Shipped) sourced from our orders backend.
- Added: Carrier-aware shipment options. Options are now filtered to the selected carrier — for example, Saturday delivery only appears for UPS and FedEx, and USPS-only options such as certified or registered mail appear only for USPS. Frequently used options stay inline, while the full set of carrier options lives behind a "Show more options" expander, grouped by category.
- Added: Third-party billing. When shipping with UPS, FedEx, or DHL Express, you can bill the shipment to another party's carrier account (account number, postal code, and country). This is unavailable for USPS and UPS-DAP accounts, which do not support it.
- Added: Tax identifiers on shipments. Sender tax IDs (IOSS, EORI, GST, VAT, EIN, and more) prefill from your Parcelcraft tax settings, and receiver tax IDs prefill from the customer's Stripe tax IDs. You can review, edit, add, and remove them per shipment, with the identifier types limited to those supported by the selected carrier.
- Added: Package size and weight validation. The package editor now flags packages that exceed the selected service or predefined package limits as errors, and warns when a package exceeds published carrier guidelines.
- Added: The print label view now shows a packing list (quantity and product per order), the recipient for each label, and a badge indicating whether the tracking email was sent for each shipment.
- Added: The drawer's unshipped list is now powered by the same unified orders backend as the full-page app, so both views always agree.
- Fixed: Ship status changes now update our orders database and Stripe metadata together through a single backend call, and the new status is mirrored to both the payment and its invoice. Stripe emits no webhook event for metadata-only payment updates, so order statuses in the unified list could previously go stale.
- Fixed: The Buy label and Test label buttons are now disabled until the shipment is actually purchasable (a rate has been selected), instead of silently doing nothing.

---

## 1.7.0 {% small %}April 14, 2026{% /small %}

- Added: When creating a shipment, under shipment options, users can now specify a preference to always ship return shipments by default.
- Added: New data is saved to our database when a user changes the ship_status metadata of an invoice or payment in anticipation of a full-page version of Parcelcraft in Stripe Apps.  This also populates data that is being collected for a new "unified orders" list for shipments from Stripe Webhook data.
- Fixed: Shipments between some European nations were not marked as international. Additional customs requirements were added between these countries to meet specific carrier requirements.
- Fixed: Unshippable items in an invoice item list had bad formatting
- Fixed: In the Settings View, users were incorrectly told there was an error saving settings.
- Fixed: When entering a new reply-to address in the notifications tab in settings, the last character of the input would be over-eagerly clipped due to a debouncing function. This could be related to a resolved bug where a text field would lose focus on the Stripe Apps platform.

---

## 1.6.0 {% small %}March 3, 2026{% /small %}

- Fixed: Paid payments were sometimes labeled as unpaid in the Unshipped payments list
- Fixed: Users who use centimeters as a default measurement unit were presented package measurements in inches (In the background EasyPost only accepts package measurement units in inches, and the app failed to correct the user dimension unit preference when displayed)
- Fixed: Shipments between countries that did not require customs forms were presented with customs forms to fill out (For example, shipping between some European Union Countries, or shipping between French colonies or shipping between certain U.S. territories, and many other use cases)
- Added: Next and previous buttons were added to the bottom of the settings tabs (Products and shipping rates will display disabled next/prev buttons if there are not enough products or shipping rates to display.  This was confusing to the user)

---

## 1.5.4 {% small %}November 26, 2025{% /small %}

- Fixed: A wildcard in our content security policy gave rare users an error: "We had a problem loading your settings."  We now explicitly set the subdomain to api.parcelcraft.com and account.parcelcraft.com. Users were sent an email to accept this permission change.
- Fixed: Successful payments were shown as unpaid
- Fixed: The layout for an unshippable product was improved
- Fixed: Users now have a clear error message when EasyPost API keys are inactive and cannot be accessed
- Fixed: The data in the Shipment History list is now automatically re-fetched every 10 minutes for data freshness.
- Fixed: We now use the Stripe account ID in URLs for links in the Stripe dashboard
- Fixed: Users with small screens or long product names could not set their product defaults
- Fixed: International shipments would have an auto-generated customs explanation based on the array of products in the shipment, which would sometimes exceed the 255 character limit.  The customs explanation is now truncated to 255 characters by default. We now show the customs explanation by default.
- Fixed: When onboarding a new origin address, we now fix the address to pass validation (since a name is required, if a user doesn't enter a name, but provides a company name, we use the company name for the name field and remove the company field before saving to the server)

---

## 1.4.3 {% small %}October 10, 2025{% /small %}

- Fixed: Users were unable to open the quickstart guide from the Parcelcraft settings view if they had completed all steps in the quickstart guide, due to a change in the Stripe SDK v9.
- Added: Users are now able to use USA Export as a carrier when creating shipments.  See <https://www.easypost.com/carriers/usa-export-powered-by-asendia/>.
- Removed: In the quickstart guide, we've removed the account checkup step and moved it to our main settings view.

---

## 1.4.1 {% small %}August 19, 2025{% /small %}

- Added: Users can request a driver pickup for a package or multiple packages and carriers after creating a shipment.
- Added: In the manage shipment view, you can add or manage insurance value and cost, and you can also request a pickup from this screen.
- Added: Users can now add insurance after creating a label in the Print label view.  If your carrier has not yet collected a parcel, you can also add insurance to a shipment in the shipment history / manage shipment view.
- Added: We now ask users to set their default shipping options in the onboarding view (new section).
- Fixed: The API key and address settings are not updated in the underlying Settings view when users prematurely exit the quick start guide. We now use the new useStorage hook to manage state between these simultaneously displayed views.
- Fixed: Scan forms have been relabeled as "End of day" to encourage their use

---

## 1.3.8 {% small %}June 24, 2025{% /small %}

- Fixed: In email settings, validation errors are now displayed to the user when entering incorrect values as a reply-to address or BCC email address

---

## 1.3.7 {% small %}June 18, 2025{% /small %}

- Fixed: When purchasing a shipping label, we disable the "Buy label" button until the label is successfully purchased to prevent multiple purchases of the same label.
- Fixed: Voided shipments could not be viewed in the shipment history focus view. We now display voided shipment details in the shipment history focus view when appropriate.
- Fixed: Removed 3rd column in onboarding modal to conform to Stripe's onboarding design standards

---

## 1.3.6  {% small %}June 2, 2025{% /small %}

- Fixed: Users no longer need to reload their app after changing any kind of user settings (thanks to Tarpan for calling attention to this issue)
- Fixed: We have removed user instructions to reload the app when settings are saved in the settings view
- Fixed: When browsing back to the dashboard, we now include "dashboard" in the link to prevent a complete dashboard reload (for example when browsing back to the dashboard in settings view using the "Go to Parcelcraft Shipping app" link)
- Fixed: Sometimes user filtering options in the unshipped list would not return enough list items to ship; we now over-fetch by 10 items, then filter the list.
- Fixed: Legacy Stripe users, when viewing a stripe.dashboard.payment.detail may be directed to a charge or order (rather than a payment intent). We now warn users that this use case is not supported.
- Fixed: In the Stripe Shipping Rate view, sometimes entering Length x Width x Height measurements would display the incorrect interface
- Fixed: Users are now directed to the onboarding modal after installing the app as a post-install action (thank you Stripe Apps Team)

---

## 1.3.1  {% small %}May 30, 2025{% /small %}

- Added: We now direct users to an onboarding modal using v9 of the Stripe SDK after initial setup. A link to access the onboarding modal has been added to the settings page.
- Added: An interface to edit default carrier settings was added to the Stripe dashboard shipping rates section at <https://dashboard.stripe.com/shipping-rates>. We now link to shipping rate or default carrier settings from the unshipped payments and invoices list.
- Added: Payments now display an itemized list of products for shipments, with item weight and quantity used to automatically pre-calculate total shipment weight.
- Added: You can now add custom field data from payment links and checkout sessions to printed shipping labels via the Stripe dashboard payment links section at <https://dashboard.stripe.com/payment-links> (Thank you Kushal).
- Added: Users who create shipments from payments can now use 1-click shipment functionality when the payment was created from a payment link or checkout session.
- Added: We now clearly denote shipments with attached Stripe Shipping rates using a link icon and tooltip. We also indicate when default settings are being used to create shipment data. For example, "Ship 2 kilograms via DHL (default)" will display in the unshipped list with a link to update default settings.
- Added: We now warn users who have not established default shipment settings and provide a direct method to configure default carrier settings.
- Fixed: Improved the UX for the page displayed after clicking the "+ Create shipping label" button on the main dashboard view.
- Fixed: In the main settings under origin address, the default address badge was not displayed when appropriate.
- Fixed: Attempting to add funds to a wallet produced unhandled errors.
- Fixed: Attempting to use a digital scale when no scale was properly configured produced no error feedback. We now notify users when a scale connection fails.

---

## 1.2.0  {% small %}May 12, 2025{% /small %}

- Added: In the shipping history focus view, when resending an email, a loading indicator is now shown.
- Added: A link to refresh the shipment history list is now added to the bottom of the shipment history tab
- Fixed: "Unknown" shipment status text has been changed to "Label created"
- Fixed: If a company name is equal to a name, we only display the name on the shipping label to avoid redundant information on the shipping label.
- Fixed: Resolved a bug introduced in version 1.1.6 that prevented the initial shipment settings from being displayed (Service, packaging, default weight and weight units were not displayed to the user properly when initially creating a shipment)

---

## 1.1.7  {% small %}May 8, 2025{% /small %}

- Added: Print to email now includes packing slips when selected in the Parcelcraft settings.  Packing slips are only supported when you create a label from an invoice.

---

## 1.1.6  {% small %}May 2, 2025{% /small %}

- Fixed: A shipment history record was not saved to the database when customer notifications were off.
- Fixed: In some cases, updated shipment settings were not saved between page views.
- Fixed: The customer's EasyPost balance was not displaying correctly in "Manage wallet".
- Fixed: Refreshing the unshipped items list did not work  (There is still a 30-second delay before new items can be searched due to a data freshness issue with the Stripe Search API).
- Added: We now save the customer_id reference when creating a shipment record in our backend in anticipation of future improvements when searching for a customer's shipment history.

---

## 1.1.6  {% small %}April 10, 2025{% /small %}

- Added: When requesting a quote from all carriers, the correct packaging option was not consistently displayed by default. We now automatically set the package type to a custom width x length x height option in this circumstance since this is the only packaging type that is compatible with all carriers.
- Fixed: The code now properly remembers packaging selections per carrier, and if a custom size is requested, we preserve those dimensions between carrier selections. This maintains a consistent user experience when switching between carriers.

---

## 1.1.4  {% small %}March 26, 2025{% /small %}

- Added:  Added support for packing slips.  Packing slips are only supported when printing a shipment from an invoice.  You can modify packing slip settings (including sending packing slips to another printer, or turning them on by default in your Parcelcraft print settings).  You can add a company logo to your packing slip by visiting account.parcelcraft.com.
- Added:  Added a message when settings are saved to tell the user to re-open the app if the app is open in another tab to apply settings. This message appears at the top of the settings page.  
- Fixed:  When viewing an older label, if the image has been deleted from the database, an attempt to display the label would cause the app to crash.  Added a user message if a label image is not available.  We disable printing labels in this case.
- Fixed:  When selecting custom shipment dimensions, the correct interface to enter custom width, length and height would not appear in some cases.
- Fixed:  When requesting a quote the select box with prices would sometimes not fill available space.
- Fixed: Settings for PrintNode would cause an error when attempting to enter an API key
- Fixed:  Tab key ids are initialized as strings rather than numbers to accommodate future upgrade to SDK v9.
- Fixed:  Added more places where older labels will show the full year in the date, if the label is from a previous year.

---

## 1.0.2  {% small %}March 4, 2025{% /small %}

- Added: Free 90-day, 25-shipment trial in Stripe live mode.  Stripe test mode requires no subscription plan.
- Added: Parcelcraft Account section to settings.  Users can create or log in (through the app) to their account at <https://account.parcelcraft.com> and select a plan for a Parcelcraft shipping subscription
- Fixed: Pagination in shipping history was not working as expected.  The next button did not fetch the correct page.
- Fixed: Improved the way older dates are shown.  Rather than saying, "Two months ago", for dates older than a week, we show the day and month if the date is this year, and the day, month, and year if the date is in a previous year
- Fixed: Searching for shipments with spaces would return no results

---

## 0.11.8  {% small %}Jan 28, 2025{% /small %}

- Fixed: Saving customs description for products did not work.
- Feature: Added tips to the Settings view for the "Shippable product" and "Default carrier" settings tabs.

---

## 0.11.7  {% small %}Jan 28, 2025{% /small %}

- Fixed: When switching between tabs in the settings view, previously saved settings were not displayed.
- Fixed: In the unshipped invoices view, older invoices than those specified by the view filter were being shown.

---

## 0.11.1  {% small %}Jan 16, 2025{% /small %}

- Feature: Added search bar below the "Create new shipment" button in the main view to quickly create a shipment based on a customer.
- Feature: Added the ability to change shipment status in list view before creating a shipment
- Fixed: Unshipped Invoice list view did not work in the last update.

---

## 0.10.7  {% small %}Jan 16, 2025{% /small %}

- Fixed: Entering an email address on the settings page for the "Print to email" email field was difficult due to incorrect rerendering.
- Feature: In view settings for Unshipped Invoices or Unshipped Payments only, you can now choose to only show successful payments or paid invoices (defaults to filter shipments).
- Feature: Added a new welcome message for new users in the settings view.

---

## 0.10.6  {% small %}Dec 20, 2024{% /small %}

- Fixed: Users who enabled DHL eCommerce as a carrier in EasyPost were unable to create shipments.

---

## 0.10.2  {% small %}Nov 20, 2024{% /small %}

- Feature: Weight conversions are now more flexible with user-inputted metadata for the value of weight_unit. Previously, only an ounce, pound, kilogram, or gram was acceptable for a weight unit. Now, values such as lbs, lb, lb., lbs., pounds, and pound are acceptable.
- Fixed: To accommodate real-world testing, the timeout for detecting an error in loading EasyPost carrier metadata was increased from 6 seconds to 10 seconds. Users should see fewer errors when operating during an EasyPost API stress test (for example, on weekends).

---

## 0.10.0  {% small %}Nov 13, 2024{% /small %}

- Fixed: No more 422 Unprocessable Content errors and improved error handling
- Fixed: Reduced the number of retries when an error is encountered in shipping to quickly display the error message
- Fixed: Address suggestions have improved to the new Google Places API v2
- Fixed: Address suggestions now correctly change the state/province field
- Fixed: In the Product Detail View, a previously set return product could not be changed to a non-return item.
- Fixed: When deleting a customs item in an international shipment, the wrong items are displayed.
- Fixed: Improved app loading speed.
- Fixed: Service names saved to metadata sometimes saved redundant words, like "Fedex FEDEX GROUND"
- Fixed: Address suggestions were not working due to an issue with API key permissions
- Fixed: Changed address verifications to be less strict to reduce errors when creating a shipment
- Fixed: Add small delay when creating or updating an origin address to ensure the database has been updated before displaying new results
- Fixed: You can now view metadata updates when editing metadata in the app; changes are reflected in the main dashboard view without a refresh required
- Fixed: Removed bulky address international formatting package in favor of a U.S.-centric address style to dramatically reduce package size
- Fixed: When deleting a shipment in the unshipped list, the interface was not immediately updated
- Feature: New Shipping Rate detail view for the app at <https://dashboard.stripe.com/shipping-rates>
- Feature: Added embedded app beta viewport
- Feature: Improve loading detail information when loading spinner is shown
- Feature: Remember setting for address suggestions

---

## 0.9.0  {% small %}Oct 3, 2024{% /small %}

- Feature: Added the ability to create and quote shipments for USPS Library Mail or USPS Media Mail rates.  Users must select Library Mail or Media Mail to get quotes for these types of USPS shipments
- Fixed: The bulk printing option had a bug where the button was active before the URL was generated correctly, creating incorrect queries if the button was pressed too soon.  It's now disabled while the request URL is being processed

---

## 0.8.2  {% small %}Aug 19, 2024{% /small %}

- Feature: A new printer icon has been added to the shipment history tab.  Click on the button to print multiple shipments at once.
- Fixed:  When updating an address, sometimes changes would not be applied in cases where a company value was deleted
- Fixed: When verifying an address in some rare cases the correct address would not be used
- Fixed: The correct package code is applied to a new shipment based on the Shipping Rate Metadata or default settings rather than defaulting to a custom package size.

---

## 0.7.1  {% small %}July 10, 2024{% /small %}

- Breaking Change:  Ship status metadata for canceled shipments was changed from cancelled to canceled to be consistent with Stripe API spelling
- Feature: Users can now see an unshipped payments list rather than only an unshipped invoices list in default view settings
- Feature: Improved manage shipment and "reship" button when in Payment or Invoice view
- Feature: Added account health checkup to Parcelcraft settings
- Feature: Added payment link permission and checkout session permissions to enable account compatibility health check
- Feature: Warn user if a payment does not have an associated customer or invoice
- Feature: Display a confirmation when a tracking notification email is sent to the customer
- Feature: Add ability to manually send a customer tracking notification when none is sent

---

## 0.6.2  {% small %}June 17, 2024{% /small %}

- Fixed: Previously saved carrier and shipping rate settings were not being displayed properly in the Carrier Defaults tab in Parcelcraft settings

---

## 0.6.1  {% small %}June 17, 2024{% /small %}

- Feature: Add shipment_id metadata to invoices and payments when a shipment is created
- Feature: Improved payment detail view with ship status control, and payment description. Added a ship status and "manage shipment button" in the payment detail view
- Feature: Payments and Invoices Stripe Objects now mirror each other's shipment details metadata at shipment creation event.
- Feature: Ability to control **payment** ship_status metadata from app
- Feature: Better ship status badges when in test mode
- Feature: Shipments that are return shipments are clearly labeled in the shipment history
- Feature: Email notifications now have carrier QR codes (when supported by carrier) for users who have selected "print to email" and to user's return shipment email notifications if the user has no printer (based on carrier support for QR codes)
- Feature: Change "Buy label" button text to "Buy return label" to clearly indicate to the user which type of label they are purchasing
- Feature: Add the ability to print source label image in email notifications and in the print window if PDF formatting is wonky.
- Fixed: Faster label generation when creating test labels or buying labels
- Fixed: Print to email would not work in all cases
- Fixed: Sometimes a return shipment would be created by default incorrectly
- Fixed: When creating a shipment sometimes the package settings box disappears in some edge cases
- Fixed: The origin address was not displaying correctly in the verify address view "ship from " dropdown
- Fixed: Incorrect options and notifications were shown if PrintNode was selected as a printer and no PrintNode API key was provided

---

## 0.5.0  {% small %}June 14, 2024{% /small %}

- Feature:  Add the ability to add a product or invoice with a metadata key of "is_return" and a value of "true" to default to create a return shipment
- Feature:  Stripe invoices with a metadata key of **is_return** and a value of **true** will automatically be tagged as a return shipment. This will also work for any product appearing in the invoice with the same metadata values.
- Fixed: Invoices were not being marked as unshipped by our backend server in test and live mode
- Fixed: Return shipping labels were incorrectly generated with the wrong to and from address.

---

## 0.4.11  {% small %}June 10, 2024{% /small %}

- Fixed: Shipments created from Customer and Payments were not saving their ID as a reference and would incorrectly show that there was no payment or customer data associated with a shipment in the shipment history view
- Fixed: Settings for carrier defaults were not saving, and once a carrier was selected, the incorrect Service and Package options were shown.
- Feature: Improved error reporting for when shipment settings did not meet the requirements for a valid shipment

---

## 0.4.8  {% small %}May 7, 2024{% /small %}

- Fixed an issue that prevented Invoice ship status from being updated
- Added a warning in the Settings view if no EasyPost Test API key is found on the account
- Improved onboarding docs for connecting an EasyPost account
- Fixed an issue in Carrier Settings that prevented the correct Service and Package options from being displayed when a carrier selection is made

---

## 0.4.7  {% small %}Apr 24, 2024{% /small %}

- Fixed an issue that prevented test labels from being printed while Stripe is in live mode
