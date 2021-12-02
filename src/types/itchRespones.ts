/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */

/* eslint-disable @typescript-eslint/naming-convention */
export interface ItchResponse {
    games: [
        {
            purchases_count: 1;
            earnings: Earnigns[];
            p_osx: boolean;
            id: number;
            published: boolean;
            published_at: string;
            views_count: number;
            url: string;
            can_be_bought: boolean;
            p_android: boolean;
            p_linux: boolean;
            created_at: string;
            user: User;
            downloads_count: number;
            has_demo: boolean;
            title: string;
            in_press_system: boolean;
            p_windows: boolean;
            cover_url: string;
            min_price: number;
            classification: string;
            short_text: string;
            type: string;
        }
    ];
}

interface Earnigns {
    amount: number;
    currency: string;
    amount_formatted: string;
}

interface User {
    url: string;
    cover_url: string;
    username: string;
    id: number;
}
