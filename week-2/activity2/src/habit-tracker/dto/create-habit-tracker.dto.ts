export class CreateHabitTrackerDto {
    id: number;
    goalTitle: string;
    goalDesc: string;
    UserID: number;
    goalProgress: number;
    createdAt: Date;
}

export class CreateHabitUserDto {
    user: string;
    userAdd: string;
    mobile: string;
}

