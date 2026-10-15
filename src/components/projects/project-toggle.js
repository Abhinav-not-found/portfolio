"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Switch } from "@/components/ui/switch";

export default function ProjectToggle({
  projectId,
  field,
  initialValue,
  label,
}) {
  const [checked, setChecked] = useState(initialValue);
  const [saving, setSaving] = useState(false);

  async function handleChange(value) {
    const previousValue = checked;

    // Update the UI immediately.
    setChecked(value);
    setSaving(true);

    try {
      const response = await fetch(`/api/project/${projectId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ field, value }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.message ?? "Update failed");
      }

      toast.success(`${label} updated`);
    } catch (error) {
      // Revert the switch if saving fails.
      setChecked(previousValue);

      toast.error(
        error instanceof Error ? error.message : "Failed to update project",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <Switch
      checked={checked}
      onCheckedChange={handleChange}
      disabled={saving}
      aria-label={`Toggle ${label}`}
    />
  );
}
