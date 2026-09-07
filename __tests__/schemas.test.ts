import { describe, it, expect } from "vitest";
import {
  assignmentSchema,
  resultSchema,
  announcementSchema,
  feePaymentSchema,
  subjectSchema,
  classSchema,
} from "@/lib/formValidationSchemas";

describe("Zod Validation Schemas", () => {
  describe("assignmentSchema", () => {
    it("validates valid assignment payload", () => {
      const data = {
        title: "Math Homework 1",
        startDate: "2026-09-01T08:00",
        dueDate: "2026-09-05T17:00",
        lessonId: 10,
      };
      const result = assignmentSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it("fails when title is empty", () => {
      const data = {
        title: "",
        startDate: "2026-09-01T08:00",
        dueDate: "2026-09-05T17:00",
        lessonId: 10,
      };
      const result = assignmentSchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("fails when lessonId is missing", () => {
      const data = {
        title: "Test",
        startDate: "2026-09-01T08:00",
        dueDate: "2026-09-05T17:00",
      };
      const result = assignmentSchema.safeParse(data);
      expect(result.success).toBe(false);
    });
  });

  describe("resultSchema", () => {
    it("validates valid score between 0 and 100", () => {
      const data = {
        score: 85,
        studentId: "student_1",
        examId: 2,
      };
      const result = resultSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it("fails when score exceeds 100", () => {
      const data = {
        score: 105,
        studentId: "student_1",
        examId: 2,
      };
      const result = resultSchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("fails when score is negative", () => {
      const data = {
        score: -5,
        studentId: "student_1",
        examId: 2,
      };
      const result = resultSchema.safeParse(data);
      expect(result.success).toBe(false);
    });
  });

  describe("feePaymentSchema", () => {
    it("validates valid fee payment payload", () => {
      const data = {
        amount: 2500,
        type: "income",
        category: "Tuition",
        date: "2026-09-01",
        studentId: "student_1",
      };
      const result = feePaymentSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it("fails when amount is 0 or negative", () => {
      const data = {
        amount: 0,
        type: "income",
        category: "Tuition",
        date: "2026-09-01",
      };
      const result = feePaymentSchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("fails when type is neither income nor expense", () => {
      const data = {
        amount: 100,
        type: "invalid_type",
        category: "Tuition",
        date: "2026-09-01",
      };
      const result = feePaymentSchema.safeParse(data);
      expect(result.success).toBe(false);
    });
  });

  describe("announcementSchema", () => {
    it("validates valid announcement", () => {
      const data = {
        title: "School Picnic",
        description: "Annual picnic will be held next Friday.",
        date: "2026-09-10",
        classId: "",
      };
      const result = announcementSchema.safeParse(data);
      expect(result.success).toBe(true);
    });

    it("fails when description is missing", () => {
      const data = {
        title: "School Picnic",
        description: "",
        date: "2026-09-10",
      };
      const result = announcementSchema.safeParse(data);
      expect(result.success).toBe(false);
    });
  });
});
