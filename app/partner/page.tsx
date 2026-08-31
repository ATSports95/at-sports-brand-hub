import { redirect } from 'next/navigation'

// The General Partner Edition now lives at the root. Keep /partner working as
// a convenience alias so existing links do not break.
export default function PartnerRedirect() {
  redirect('/')
}
