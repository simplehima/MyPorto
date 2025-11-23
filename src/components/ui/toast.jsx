import { cn } from "@/lib/utils";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, CheckCircle2, AlertCircle } from "lucide-react"; // Added icons
import React from "react";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      // Base Layout
      "fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 outline-none",

      // Mobile: Position at Top Center
      "top-0 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0",

      // Desktop: Position at Bottom Right
      "sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  // Base Animations & Layout
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-2xl border p-5 shadow-2xl transition-all " +
    // Swipe Gestures
    "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none " +
    // Entry/Exit Animations
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out " +
    "data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full " +
    // Mobile Specific Animation (Slide down from top)
    "data-[state=open]:slide-in-from-top-full " +
    // Desktop Specific Animation (Slide up from bottom)
    "data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-black/80 backdrop-blur-xl text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-cyan-500/30 selection:bg-cyan-500/30",
        destructive:
          "destructive group border-red-500/20 bg-red-950/90 backdrop-blur-xl text-red-100 shadow-[0_0_30px_rgba(220,38,38,0.2)]",
        success:
          "border-green-500/20 bg-green-950/90 backdrop-blur-xl text-green-100 shadow-[0_0_30px_rgba(34,197,94,0.2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 text-sm font-medium transition-colors hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-red-500/30 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500/10 group-[.destructive]:focus:ring-red-500",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-full p-1 text-white/50 opacity-0 transition-all hover:text-white hover:bg-white/10 focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-bold tracking-tight", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-80 leading-relaxed", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
};
