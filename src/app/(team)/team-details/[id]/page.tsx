import team_data from '@/data/team-data';
import TeamDetailsMain from '@/pages/team/team-details';
import { PageParamsProps } from '@/types/custom-d-t';
import React from 'react';

// 1️⃣ REQUIRED FOR STATIC EXPORT
export async function generateStaticParams() {
    return team_data.map((member) => ({
        id: member.id.toString(),
    }));
}

// 2️⃣ SEO metadata
export async function generateMetadata({ params }: PageParamsProps) {
    const { id } = await params;
    const team = team_data.find((item) => item.id === Number(id));

    return {
        title: team?.name ? team.name : 'Team Details',
    };
}

// 3️⃣ PAGE COMPONENT
export default async function TeamDetailsPage({ params }: PageParamsProps) {
    const { id } = await params;

    return <TeamDetailsMain id={id} />;
}
