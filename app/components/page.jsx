"use client";
import {
  Button,
  Input,
  Loader,
  Modal,
  Toast,
} from "../../components/ui";

export default function ComponentsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        Component Showcase
      </h1>

      <Button
        text="Click Me"
        onClick={() => alert("Button Clicked")}
      />

      <Input placeholder="Enter your name" />

      <Loader />

      <Modal title="Demo Modal">
        <p>This is modal content.</p>
      </Modal>

      <Toast message="Success Message" />
    </div>
  );
}