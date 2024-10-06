import React from 'react';
import { Activity, CategoryFilter as CategoryFilterType } from './types';
import { activities } from './data/activities';
import ActivityList from './components/ActivityList';
import CategoryFilter from './components/CategoryFilter';
import { Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState<CategoryFilterType>('all');

  const categories = React.useMemo(() => {
    return ['all', ...Array.from(new Set(activities.map((activity) => activity.category)))];
  }, []);

  const filteredActivities = React.useMemo(() => {
    return selectedCategory === 'all'
      ? activities
      : activities.filter((activity) => activity.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="mr-2" /> Activity Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <ActivityList activities={filteredActivities} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;