import { defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from "astro/zod";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {

    send: defineAction({

        accept: "form",
        input: z.object({
            name: z.string(),
            email: z.email(),
        }),
        handler: async () => {

            const {data, error} = await resend.emails.send({

                from: 'Cameron <cameron@booking.camerondemartini.com>',
                to: ['camerondemartini@gmail.com'],
                subject: 'test email',
                html: '<p>Let\'s see if this works...</p>'

            });

            if (error) {

                throw error;

            }

            return data;

        }

    })

}