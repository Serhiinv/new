interface Feature {
    id: string;
    heading: string;
    data: string;
    text: string;
    ariaLabel: string;
}

export const features: Feature[] = [
    {
        id: "Impact",
        heading: "Instant impact",
        data: "+70%",
        text: "Auction registrations \n" +
            "up in three months \n" +
            "after go live.",
        ariaLabel: "Impact",
    },
    {
        id: "Targeted search",
        heading: "Targeted search",
        data: "2/3",
        text: "Of target actions (e.g. request estimate) from free-search customers.",
        ariaLabel: "Targeted search",
    },
    {
        id: "Customers love it",
        heading: "Customers love it",
        data: "88%",
        text: "Of customers rated site \n" +
            "4 or 5 out of 5 (200+ customers).",
        ariaLabel: "Customers love it",
    },
    {
        id: "Google loves it",
        heading: "Google loves it",
        data: "100%",
        text: "Upcoming lots on \n" +
            "Google within hours -\n" +
            "way ahead of competitors.",
        ariaLabel: "Google loves it",
    },
    {
        id: "Improved reach",
        heading: "Improved reach",
        data: "16,700%",
        text: "Recent site launch saw this massive increase in weeks.",
        ariaLabel: "Improved reach",
    },
    {
        id: "Key to ALL sales ",
        heading: "Key to ALL sales ",
        data: "91%",
        text: "Of all winning bidders\n" +
            "are registered on \n" +
            "the website.",
        ariaLabel: "Key to ALL sales ",
    },
];

