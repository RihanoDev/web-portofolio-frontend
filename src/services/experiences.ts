import type { Experience } from '../types/experience'

export const getExperiences = (): Experience[] => [
  {
    id: 1,
    title: 'Backend Engineer',
    company: 'Tualang',
    location: 'Jakarta, Indonesia',
    period: '2023 - Sekarang',
    type: 'full-time',
    description: 'Bangun dan scaling API ber-throughput tinggi untuk platform e-commerce dengan arsitektur event-driven.',
    achievements: [
      '99.9% uptime dengan auto-recovery dan retry berbasis DLQ',
      'P95 response turun 35% lewat query tuning + Redis caching',
      'Throughput naik 2.3x setelah memecah monolith ke microservices',
      'Zero-downtime deploy via blue/green di Kubernetes'
    ],
    technologies: ['Go', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Kubernetes'],
    logo: '/companies/tualang.png'
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'SuriaTech',
    location: 'Bandung, Indonesia',
    period: '2022 - 2023',
    type: 'full-time',
    description: 'Rancang layanan pembayaran dan notifikasi dengan integrasi pihak ke-3 yang resilient.',
    achievements: [
      'Memproses 500K+ transaksi/bulan dengan idempotency dan outbox pattern',
      'Waktu rilis turun 70% setelah CI/CD + quality gate (lint, tests)',
      'Improved developer onboarding dengan dokumentasi API + Postman collection',
      'Observability lengkap (tracing + metrics) pakai OpenTelemetry'
    ],
    technologies: ['Go', 'gRPC', 'MySQL', 'Redis', 'Docker', 'GitLab CI'],
    logo: '/companies/suriatech.png'
  },
  {
    id: 3,
    title: 'Backend Engineer Intern',
    company: 'BRIAPI',
    location: 'Jakarta, Indonesia',
    period: '2021',
    type: 'contract',
    description: 'Membantu pengembangan modul API internal dan hardening keamanan.',
    achievements: [
      'Kurangi error rate 20% lewat validasi input terstandardisasi',
      'Tingkatkan kecepatan build 3x dengan cache layer pada pipeline',
      'Hardening endpoint sensitif (rate limit + audit log)'
    ],
    technologies: ['Go', 'Gin', 'PostgreSQL', 'JWT', 'SonarQube'],
    logo: '/companies/briapi.png'
  }
]


