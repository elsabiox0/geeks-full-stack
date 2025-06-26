"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { addTask } from "@/lib/redux/slices/tasksSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Plus } from "lucide-react";

const formSchema = z.object({
  text: z.string().min(1, { message: "Task cannot be empty." }).max(150, { message: "Task is too long." }),
});

export default function AddTaskForm({ selectedDate }: { selectedDate: Date }) {
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { text: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const dateKey = format(selectedDate, "yyyy-MM-dd");
    dispatch(addTask({ date: dateKey, text: values.text }));
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <Input placeholder="Add a new task..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Plus className="mr-2 h-4 w-4" /> Add
        </Button>
      </form>
    </Form>
  );
}
