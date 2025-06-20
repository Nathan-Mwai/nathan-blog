"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  CircleUserRound,
  Command,
  Frame,
  GalleryVerticalEnd, Github, House, Instagram, Mails,
  Map,
  PieChart, Send,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
      isActive: true,
    },
    {
      title: "About",
      url: "/about",
      icon: CircleUserRound,
    },
    {
      title: "Letters",
      url: "/mail",
      icon: Mails,
    },
  ],
  projects: [
    {
      name: "Instagram",
      url: "/",
      icon: Instagram,
    },
    {
      name: "mail",
      url: "mailto:mwaimwaniki001@gmail.com",
      icon: Send,
    },
    {
      name: "GitHub",
      url: "https://github.com/Nathan-Mwai",
      icon: Github,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        {/*<NavUser user={data.user} />*/}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
