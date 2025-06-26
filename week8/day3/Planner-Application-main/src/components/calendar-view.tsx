"use client";

import { useSelector } from "react-redux";
import { Calendar } from "@/components/ui/calendar";
import type { RootState } from "@/lib/redux/store";
import type { DayPicker } from "react-day-picker";
import { useMemo } from "react";

type CalendarViewProps = {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
};

export default function CalendarView({
  selectedDate,
  onDateChange,
}: CalendarViewProps) {
  const tasks = useSelector((state: RootState) => state.tasks);

  const daysWithTasks = useMemo(() => {
    return Object.keys(tasks)
      .filter(dateStr => tasks[dateStr]?.length > 0)
      .map(dateStr => new Date(dateStr.replace(/-/g, '/')));
  }, [tasks]);

  const modifiers: DayPicker["modifiers"] = {
    withTasks: daysWithTasks,
  };

  const modifiersStyles: DayPicker["modifiersStyles"] = {
    withTasks: {
      fontWeight: 'bold',
      color: 'hsl(var(--primary))',
    },
  };

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={onDateChange}
      className="rounded-md border-0 p-0"
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
    />
  );
}
