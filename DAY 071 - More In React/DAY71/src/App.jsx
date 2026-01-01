import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = [
    {
      image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sophie Bennett",
      profession: "A Product Designer focused on intuitive user experiences.",
      connections: 312,
      followers: 48,
      isFollowing: false
    },
    {
      image: "https://images.unsplash.com/photo-1622383659984-03e1c9b75d36?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ethan Carter",
      profession: "A Frontend Engineer crafting smooth and accessible web interfaces.",
      connections: 528,
      followers: 134,
      isFollowing: true
    },
    {
      image: "https://images.unsplash.com/photo-1752074210538-972a3197f398?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8",
      name: "Ava Rodriguez",
      profession: "A Visual Designer blending branding, motion, and storytelling.",
      connections: 421,
      followers: 96,
      isFollowing: false
    },
    {
      image: "https://images.unsplash.com/photo-1580651214613-f4692d6d138f?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Priya Nair",
      profession: "A Creative Developer building interactive and immersive experiences.",
      connections: 689,
      followers: 203,
      isFollowing: true
    },
    {
      image: "https://images.unsplash.com/photo-1741605037162-b1f475a4a4d3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Maya Patel",
      profession: "A UX Researcher turning user insights into meaningful product decisions.",
      connections: 247,
      followers: 61,
      isFollowing: false
    },
    {
      image: "https://images.unsplash.com/photo-1758538843183-c31eee9aca87?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Noah Kim",
      profession: "A Product Manager aligning business goals with user needs.",
      connections: 384,
      followers: 119,
      isFollowing: true
    },
    {
      // image: "https://images.unsplash.com/photo-1704775991545-fc0507822fea?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "https://images.unsplash.com/photo-1704775988086-f899d6566a4c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fellipe Ditadi",
      profession: "A Product Designer focused on intuitive user experiences.",
      connections: 312,
      followers: 48,
      isFollowing: false
    },
    {
      image: "https://images.unsplash.com/photo-1676638730218-74d3681853c8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Oliver Grant",
      profession: "A Motion Designer bringing interfaces to life through animation.",
      connections: 455,
      followers: 178,
      isFollowing: true
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1727967291566-f9667986d9f9?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daniel Brooks",
      profession: "A Backend Engineer designing scalable and reliable systems.",
      connections: 612,
      followers: 244,
      isFollowing: true
    },
    {
      image: "https://images.unsplash.com/photo-1673610178158-1c4c5b7e4d98?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      name: "Emily Chen",
      profession: "A UX Writer crafting clear, human-centered product language.",
      connections: 291,
      followers: 83,
      isFollowing: false
    },
    {
      image: "https://images.unsplash.com/photo-1744535814655-e76ab1be10a2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Liam Walker",
      profession: "A Data Analyst turning complex data into actionable insights.",
      connections: 338,
      followers: 102,
      isFollowing: false
    },
    {
      image: "https://images.unsplash.com/photo-1749035004532-027906d35359?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Isabella Moore",
      profession: "A Brand Strategist shaping meaningful identities through research and storytelling.",
      connections: 467,
      followers: 158,
      isFollowing: false
    }
  ];

  return (
    <div className='container'>
      {users.map((user, idx) => (
        <Card key={idx} user={user} />
      ))}
    </div>
  )
}

export default App