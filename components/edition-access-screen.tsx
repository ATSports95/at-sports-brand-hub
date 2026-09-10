'use client'

import { useActionState } from 'react'
import { Lock } from 'lucide-react'
import {
  submitEditionPassword,
  type AccessState,
} from '@/app/actions/edition-access'
import { LogoTile } from '@/components/logo-tile'

/**
 * Branded gate shown for a protected edition until the visitor authenticates.
 * It never references or links to other editions. The password is verified by
 * a server action; only an error string returns to the client.
 */
export function EditionAccessScreen({ slug }: { slug: string }) {
  const action = submitEditionPassword.bind(null, slug)
  const [state, formAction, pending] = useActionState<AccessState, FormData>(
    action,
    {},
  )

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="flex justify-center">
          <LogoTile
            file="at-sports-white.svg"
            alt="AT Sports"
            className="w-44 [&>div]:aspect-auto [&>div]:h-16 [&>div]:border-0 [&>div]:bg-transparent [&>div]:p-0"
          />
        </div>

        <div className="mt-8 rounded-lg border border-border bg-black/40 p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="flex size-11 items-center justify-center rounded-full bg-sky/15 text-sky">
              <Lock className="size-5" />
            </span>
            <h1 className="text-2xl font-bold text-navy">
              AT Sports Brand Hub
            </h1>
            <p className="font-mono text-xs font-semibold tracking-widest text-sky uppercase">
              Protected Partner Access
            </p>
            <p className="text-sm leading-relaxed text-ink/80">
              Enter your password to access this Brand Hub.
            </p>
          </div>

          <form action={formAction} className="mt-6 flex flex-col gap-3">
            <label htmlFor="access-password" className="sr-only">
              Password
            </label>
            <input
              id="access-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              autoFocus
              placeholder="Password"
              aria-invalid={state.error ? true : undefined}
              className="rounded-md border border-border bg-card px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-slate focus:border-sky"
            />
            {state.error && (
              <p role="alert" className="text-sm text-destructive">
                {state.error}
              </p>
            )}
            <button
              type="submit"
              disabled={pending}
              className="mt-1 inline-flex items-center justify-center rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? 'Checking…' : 'Access Brand Hub'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
