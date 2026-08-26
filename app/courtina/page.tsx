import { redirect } from 'next/navigation'

// The Courtina edition now lives at the root. Keep /courtina working as a
// convenience alias so existing links do not break.
export default function CourtinaRedirect() {
  redirect('/')
}
