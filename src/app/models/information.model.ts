export class Information{
    establishment_name:string
    today:Week
    week_work:Week[]
    work_compile:string
    delivery_fee:number
    delivery_time:string
}

export class Week{
    week_day:number;
    week_name:string;
    work_open:string;
    work_close:string;
}