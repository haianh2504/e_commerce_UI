import type { MockCheckoutOption } from "@/data/mock/checkout";

type CheckoutOptionProps = { defaultChecked?: boolean; name: string; option: MockCheckoutOption };

export function CheckoutOption({ defaultChecked, name, option }: CheckoutOptionProps) {
  return (
    <label className="flex cursor-pointer gap-3 rounded-button border border-border bg-surface p-4 transition-colors hover:border-text-secondary has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/15">
      <input className="mt-1 size-4 accent-primary" type="radio" name={name} value={option.id} defaultChecked={defaultChecked} required />
      <span><span className="block font-semibold">{option.label}</span><span className="mt-1 block text-sm leading-6 text-text-secondary">{option.description}</span></span>
    </label>
  );
}
