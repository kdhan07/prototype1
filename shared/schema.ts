import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  fullName: text("full_name").notNull(),
  avatar: text("avatar"),
  bio: text("bio"),
  department: text("department"),
  rating: integer("rating").default(0),
  tasksCompleted: integer("tasks_completed").default(0),
  studySessionsJoined: integer("study_sessions_joined").default(0),
  isTeacher: boolean("is_teacher").default(false),
});

export const studyRooms = pgTable("study_rooms", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  subject: text("subject").notNull(),
  description: text("description"),
  creatorId: varchar("creator_id").notNull(),
  memberCount: integer("member_count").default(1),
  maxMembers: integer("max_members").default(10),
  status: text("status").notNull().default("active"),
  scheduledAt: timestamp("scheduled_at"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const teachers = pgTable("teachers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  status: text("status").notNull().default("free"),
  department: text("department").notNull(),
  officeLocation: text("office_location"),
  specialization: text("specialization"),
});

export const tasks = pgTable("tasks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  posterId: varchar("poster_id").notNull(),
  minBudget: integer("min_budget").notNull(),
  maxBudget: integer("max_budget").notNull(),
  deadline: timestamp("deadline").notNull(),
  status: text("status").notNull().default("open"),
  acceptedBidId: varchar("accepted_bid_id"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const bids = pgTable("bids", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  taskId: varchar("task_id").notNull(),
  bidderId: varchar("bidder_id").notNull(),
  amount: integer("amount").notNull(),
  message: text("message"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertUserSchema = createInsertSchema(users).omit({ id: true });
export const insertStudyRoomSchema = createInsertSchema(studyRooms).omit({ id: true, createdAt: true });
export const insertTaskSchema = createInsertSchema(tasks).omit({ id: true, createdAt: true });
export const insertBidSchema = createInsertSchema(bids).omit({ id: true, createdAt: true });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type StudyRoom = typeof studyRooms.$inferSelect;
export type Task = typeof tasks.$inferSelect;
export type Bid = typeof bids.$inferSelect;
