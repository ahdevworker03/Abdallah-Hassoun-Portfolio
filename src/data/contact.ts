export interface ContactDetail {
  label: string
  value: string
  icon: string
  url?: string
}

export const contactDetails: ContactDetail[] = [
  {
    label: "Location",
    value: "Tripoli, Lebanon",
    icon: "fa-solid fa-location-dot",
  },
  {
    label: "Email",
    value: "ahdevworker03@gmail.com",
    icon: "fa-solid fa-envelope",
    url: "mailto:ahdevworker03@gmail.com",
  },
  {
    label: "Phone",
    value: "+961 71 819 509",
    icon: "fa-solid fa-phone",
    url: "tel:+96171819509",
  },
]
