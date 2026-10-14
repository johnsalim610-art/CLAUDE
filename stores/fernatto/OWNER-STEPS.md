# Fernatto — steps only the owner can do (Shopify admin)

These are the steps the Shopify API blocks. Do them in admin.shopify.com/store/8ptbn0-ra.

## 1. Paste the six policies  (Settings → Policies)
The texts are in `stores/fernatto/policies/` in this repo (HTML).
For each policy:
1. Open it, click the **`<>` (Show HTML)** button in the editor toolbar.
2. Select all existing text, delete it, paste the matching file's contents, then **Save**.

| Shopify policy | File |
|---|---|
| Refund policy | `refund-policy.html` |
| Privacy policy | `privacy-policy.html` — first switch **OFF** "Use automated privacy policy" / "Automatic management" |
| Terms of service | `terms-of-service.html` |
| Shipping policy | `shipping-policy.html` |
| Contact information | `contact-information.html` |
| Legal notice | `legal-notice.html` |

## 2. Themes  (Online Store → Themes)
- **Fernatto** (unpublished): use Preview / Customize to review it. Don't publish yet; publish when the products are in (step in the next session).
- **"DELETE ME - unused Horizon copy"** → ⋯ → Remove. (Leftover from a failed approach; the API cannot delete themes.)

## 3. Currency  (only Shopify Support)
The store currency is EUR and the store has paid orders, so Settings → General won't let you change it.
Contact Shopify Support and ask them to change the store currency to **GBP**.

## 4. Settings → General  (at cut-over, not yet)
- Store name: Fernatto · Store email / sender email: contact@fernatto.com · Phone: +44 7482 574528
- Business address: SANA PARTNERS LTD, Top Floor 19 Windsor Place, Cardiff, CF10 3BY, United Kingdom

## 5. Never done by the assistant
- Shopify Payments setup (yours to complete).
- Mailbox: confirm contact@fernatto.com receives mail.
- UK registrations if applicable to your products: WEEE producer obligations for electrical items, packaging EPR.
