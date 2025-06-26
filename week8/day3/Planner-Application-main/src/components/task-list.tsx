"use client";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import type { RootState } from "@/lib/redux/store";
import AddTaskForm from "./add-task-form";
import TaskItem from "./task-item";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

type TaskListProps = {
  selectedDate: Date;
};

export default function TaskList({ selectedDate }: TaskListProps) {
  const dateKey = useMemo(() => format(selectedDate, "yyyy-MM-dd"), [selectedDate]);
  const tasks = useSelector((state: RootState) => state.tasks[dateKey] || []);

  return (
    <div className="flex flex-col h-full">
      <AddTaskForm selectedDate={selectedDate} />
      <Separator className="my-4" />
      <ScrollArea className="flex-grow pr-4 -mr-4" style={{maxHeight: 'calc(100vh - 420px)'}}>
        {tasks.length > 0 ? (
          <motion.ul layout className="space-y-3">
            <AnimatePresence>
              {tasks.map((task) => (
                <TaskItem key={task.id} task={task} date={selectedDate} />
              ))}
            </AnimatePresence>
          </motion.ul>
        ) : (
          <div className="text-center text-muted-foreground py-10">
            <p className="font-medium">No tasks for this day.</p>
            <p className="text-sm">Add a new task to get started!</p>
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
