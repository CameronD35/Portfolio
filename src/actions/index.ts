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
            level: z.string(),
            courses: z.array(z.string()).min(1, "Please select at least one course!"),
            body: z.string(),
        }),
        handler: async ({name, email, level, courses, body}) => {

            const {data, error} = await resend.emails.send({

                from: 'Cameron <cameron@booking.camerondemartini.com>',
                to: ['camerondemartini@gmail.com'],
                cc: [email],
                subject: `New Tutoring Information Request from ${name}`,
                html: `<h1>${name}</h1>
                <p>${level} student looking for help in: ${courses.join(", ")}</p>
                <p>Additional Notes: ${body}</p>
                `

            });

            if (error) {

                throw error;

            }

            return data;

        }

    })

}