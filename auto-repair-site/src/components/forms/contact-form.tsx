"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = {
    message: "",
    error: "",
    success: false,
};

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    if (state?.success) {
        return (
            <div className="p-8 bg-surface rounded-sm border border-border text-center">
                <h3 className="text-xl font-bold text-copper mb-2">Request Received</h3>
                <p className="text-navy-900">{state.message}</p>
                <p className="text-text-secondary mt-4">We will be in touch shortly.</p>
            </div>
        );
    }

    return (
        <form className="space-y-6" action={formAction}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-navy-900 block">Name <span className="text-brand-red">*</span></label>
                    <input type="text" id="name" name="name" required disabled={isPending} className="flex h-12 w-full rounded-sm border border-input bg-surface px-4 py-2 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20 disabled:opacity-50" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-navy-900 block">Phone <span className="text-brand-red">*</span></label>
                    <input type="tel" id="phone" name="phone" required disabled={isPending} className="flex h-12 w-full rounded-sm border border-input bg-surface px-4 py-2 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20 disabled:opacity-50" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-navy-900 block">Email <span className="text-muted-foreground font-normal">(optional but recommended)</span></label>
                    <input type="email" id="email" name="email" disabled={isPending} className="flex h-12 w-full rounded-sm border border-input bg-surface px-4 py-2 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20 disabled:opacity-50" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="vehicle" className="text-sm font-medium text-navy-900 block">Vehicle Year / Make / Model</label>
                    <input type="text" id="vehicle" name="vehicle" placeholder="e.g. 2018 Ford F-150" disabled={isPending} className="flex h-12 w-full rounded-sm border border-input bg-surface px-4 py-2 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20 placeholder:text-muted/60 disabled:opacity-50" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="issue" className="text-sm font-medium text-navy-900 block">Describe the Issue</label>
                <textarea id="issue" name="issue" rows={4} disabled={isPending} className="flex w-full rounded-sm border border-input bg-surface px-4 py-3 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20 resize-y disabled:opacity-50" />
            </div>

            <div className="space-y-2">
                <label htmlFor="contact_method" className="text-sm font-medium text-navy-900 block">Preferred Contact Method</label>
                <select id="contact_method" name="contact_method" disabled={isPending} className="flex h-12 w-full rounded-sm border border-input bg-surface px-4 py-2 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20 appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center] disabled:opacity-50">
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                </select>
            </div>

            {state?.error && (
                <div className="text-brand-red font-medium text-sm">
                    {state.error}
                </div>
            )}

            <div className="pt-4 flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
                <Button type="submit" disabled={isPending} size="lg" className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white h-14 px-10 text-lg rounded-sm disabled:opacity-75">
                    {isPending ? "Sending..." : "Schedule Service"}
                </Button>

                <div className="space-y-3 w-full sm:w-auto p-4 sm:p-0 bg-surface sm:bg-transparent rounded-sm border border-border sm:border-transparent">
                    <h3 className="font-heading font-semibold text-navy-950 text-sm">What Happens Next</h3>
                    <ol className="text-sm text-text-secondary space-y-2">
                        <li className="flex gap-2">
                            <span className="text-copper font-medium">1.</span> We review your request.
                        </li>
                        <li className="flex gap-2">
                            <span className="text-copper font-medium">2.</span> We confirm availability.
                        </li>
                        <li className="flex gap-2">
                            <span className="text-copper font-medium">3.</span> We discuss next steps.
                        </li>
                    </ol>
                </div>
            </div>
        </form>
    );
}
