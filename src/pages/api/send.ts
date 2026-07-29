import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {

    const {data, error} = await resend.emails.send({

        from: 'Cameron <cameron@booking.camerondemartini.com>',
        to: ['camerondemartini@gmail.com'],
        subject: 'test email',
        html: '<p>Let\'s see if this works...</p>'

    });

    if (error) {

        return new Response(JSON.stringify(error));

    }

    return new Response(JSON.stringify(data));

}