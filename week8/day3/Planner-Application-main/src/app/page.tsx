"use client";

import { useState } from "react";
import { format } from "date-fns";
import CalendarView from "@/components/calendar-view";
import TaskList from "@/components/task-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const formattedDate = selectedDate ? format(selectedDate, "PPP") : "No date selected";

  return (
    <main className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-4xl font-headline font-bold text-center text-foreground">
            DayTask
          </h1>
          <p className="text-center text-muted-foreground mt-2 font-body">
            Your personal daily planner. Select a day to manage your tasks.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">Calendar</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <CalendarView
                  selectedDate={selectedDate}
                  onDateChange={handleDateSelect}
                />
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  Tasks for <span className="text-primary">{formattedDate}</span>
                </CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="pt-6">
                {selectedDate ? (
                  <TaskList selectedDate={selectedDate} />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground min-h-[200px]">
                    <p>Select a date from the calendar to see your tasks.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
