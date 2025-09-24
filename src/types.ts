export type Comment = {
id: string
author: string
text: string
date: string // ISO
}

export type News = {
id: string
title: string
date: string // ISO
content: string
image?: string
categories: string[]
comments: Comment[]
}