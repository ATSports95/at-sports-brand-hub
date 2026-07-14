import { Section, SectionHeading } from '@/components/section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ_ITEMS } from '@/lib/brand'

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />

      <Accordion className="rounded-md border border-border bg-card px-5">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem key={item.q} value={`faq-${i}`}>
            <AccordionTrigger className="py-4 text-base font-semibold text-navy">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-ink/80">
              <p className="leading-relaxed">{item.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
