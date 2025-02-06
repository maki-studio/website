'use client'

type FAQ = {
    question: string,
    answer: string,
}

const faqs: FAQ[] = [
    {
        "question":"How quickly can you deliver a project?",
        "answer":"Project timelines vary based on scope, but we typically deliver websites within 2-3 weeks and landing pages within 5-7 business days. We'll provide a detailed timeline during our discovery call."
    },
    {
        "question":"Do you work with clients in different time zones?",
        "answer":" Absolutely! Our remote setup allows us to collaborate effectively across time zones. We adjust our meeting times to find slots that work for both parties and maintain clear communication throughout."
    },
    {
        "question":"What's your revision policy?",
        "answer":" Each project includes two rounds of revisions to ensure you're completely satisfied. We believe in getting things right and work closely with you to achieve your vision."
    },
    {
        "question":"What do I need to prepare before working with you?",
        "answer":"Just your ideas and goals! During our discovery call, we'll guide you through everything we need to know about your business and design preferences. No extensive briefs required."
    },
    {
        "question":"Do you provide ongoing design support?",
        "answer":"  Yes! Many of our clients choose to work with us long-term. We offer flexible retainer packages for businesses needing regular design updates and support."
    },
    {
        "question":"What makes your design studio different?",
        "answer":"We combine professional design expertise with a personal approach. Unlike larger agencies, you work directly with experienced designers who take the time to understand your business goals and deliver solutions that grow with you."
    },
    {
        "question":"Do you help with website maintenance after launch?",
        "answer":"Yes, we offer website maintenance packages to keep your site updated, secure, and performing at its best. We can discuss these options based on your specific needs."
    },
    {
        "question":"How quickly can you deliver a project?",
        "answer":" Project timelines vary based on scope, but we typically deliver websites within 2-3 weeks and landing pages within 5-7 business days. We'll provide a detailed timeline during our discovery call."
    },
    // {
    //     "question":"",
    //     "answer":""
    // },
    
];


export default function FAQSection() {
    return <>
        <main className="p-8 bg-accent1 bg-opacity-40 ">
            <h2 className="h2 font-display font-medium text-5xl mb-4 md:mb-8">Frequently Asked Questions</h2>
            <section className="bg-offWhite1B text-black p-8 border-dashed border-2 border border-black ">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {faqs.map(
                        (faq,index) => <li key={"f-"+index} className="p-8 bg-accent2 bg-opacity-40 hover:bg-opacity-80 hover:shadow hover:transition-700">
                            <p className="font-bold"><b>Q:</b>&nbsp; {faq.question} </p>
                            <br />
                            <p><b>A:—</b>&nbsp; {faq.answer} </p>
                        </li>
                    )}
                </ul>
            </section>
        </main>
        <div></div>
    </>
}

