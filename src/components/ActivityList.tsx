import React from 'react';
import { Activity } from '../types';
import { Card, CardContent } from "@/components/ui/card"

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div className="space-y-2">
      {activities.map((activity) => (
        <Card key={activity.id}>
          <CardContent className="p-4 flex justify-between items-center">
            <span className="font-medium">{activity.name}</span>
            <span className="text-sm text-muted-foreground">{activity.category}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ActivityList;