"use client";

import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { format } from "date-fns";
import type { Task } from "@/lib/redux/slices/tasksSlice";
import { toggleTask } from "@/lib/redux/slices/tasksSlice";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import EditTaskModal from "./edit-task-modal";
import DeleteTaskAlert from "./delete-task-alert";
import { cn } from "@/lib/utils";

type TaskItemProps = {
  task: Task;
  date: Date;
};

export default function TaskItem({ task, date }: TaskItemProps) {
  const dispatch = useDispatch();
  const dateKey = format(date, "yyyy-MM-dd");

  const handleToggle = () => {
    dispatch(toggleTask({ date: dateKey, id: task.id }));
  };

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex items-center gap-4 p-3 rounded-lg bg-card/80 border transition-colors hover:bg-secondary/50"
    >
      <Checkbox
        id={`task-${task.id}`}
        checked={task.completed}
        onCheckedChange={handleToggle}
        aria-label={`Mark task as ${task.completed ? "incomplete" : "complete"}`}
      />
      <Label
        htmlFor={`task-${task.id}`}
        className={cn(
          "flex-grow cursor-pointer text-sm transition-all",
          task.completed && "line-through text-muted-foreground"
        )}
      >
        {task.text}
      </Label>
      <div className="flex items-center gap-1 ml-auto">
        <EditTaskModal task={task} date={date} />
        <DeleteTaskAlert taskId={task.id} date={date} />
      </div>
    </motion.li>
  );
}
