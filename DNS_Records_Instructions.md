# DNS Records Setup Instructions for thecima.org

Hi,

We need to add **2 additional DNS records** to complete the domain setup for Vercel. Please add these records to the DNS settings at the domain registrar:

---

## Record 1: TXT Record (For Domain Verification)

- **Name/Host**: `_vercel`
- **Type**: `TXT`
- **Value**: `vc-domain-verify=thecima.org,1980c0f840703a51b3d5`
- **TTL**: `14400` (or leave default)

---

## Record 2: A Record (For Root Domain)

- **Name/Host**: `@` (or leave blank, depending on your DNS provider)
- **Type**: `A`
- **Value**: `76.76.21.21` (Vercel's IP address)
- **TTL**: `14400` (or leave default)

---

## Current DNS Records (Already Added) ✅

You've already added this one correctly:
- **Name**: `www.thecima.org`
- **Type**: `CNAME`
- **Value**: `cname.vercel-dns.com`
- **TTL**: `14400`

---

## Final DNS Configuration Should Look Like This:

| Name | Type | Value | TTL |
|------|------|-------|-----|
| `www.thecima.org` | CNAME | `cname.vercel-dns.com` | 14400 |
| `@` (or blank) | A | `76.76.21.21` | 14400 |
| `_vercel` | TXT | `vc-domain-verify=thecima.org,1980c0f840703a51b3d5` | 14400 |

---

## After Adding These Records:

1. Save the changes in your DNS management panel
2. Wait **10-30 minutes** for DNS propagation
3. Let me know once done so I can verify in Vercel

---

## Notes:

- If your DNS provider shows an error about the `@` symbol, try entering just `thecima.org` or leaving the field blank
- Some providers automatically append the domain name, so you may only need to enter `_vercel` instead of `_vercel.thecima.org`
- DNS changes can take up to 48 hours to fully propagate, but usually work within 10-30 minutes

---

**Important**: Please add both records and save the changes. The website won't work properly until all three DNS records are in place.

Thank you!
