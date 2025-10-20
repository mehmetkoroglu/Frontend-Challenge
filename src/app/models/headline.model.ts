export interface Headline {
    status: string;
    totalResults: number;
    articles: articles[];
}

interface articles {
    author: string;
    content: string;
    description: string;
    publishedAt: number;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}