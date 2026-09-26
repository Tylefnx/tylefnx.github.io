import { CourseTrack, SearchTopic } from '../types';

export const COURSES: Record<'reactjs' | 'springboot', CourseTrack> = {
  reactjs: {
    id: 'reactjs',
    title: 'React JS & Next.js',
    subtitle: 'Mastery Hub & Modern Web Architecture',
    badge: 'FRONTEND ARCHITECT',
    tagline: 'Modern React 19, Fiber Mimarisi, Custom Hooks, App Router & State Labs',
    description:
      'Sıfırdan ileri seviyeye modern React ekosistemi. Virtual DOM ve Fiber mimarisi görselleştiricisi, interaktif hook laboratuvarları, Next.js App Router ve performans optimizasyonu teknikleri.',
    icon: 'react',
    accentColor: 'cyan',
    primaryUrl: 'https://react.tayfunucuncu.dev/',
    githubUrl: 'https://github.com/Tylefnx/learnreactjs',
    stats: {
      modules: 14,
      lessons: 48,
      interactiveSandboxes: 12,
      quizzes: 24,
      durationEstimate: '45+ Saat',
      level: 'Başlangıçtan İleri Düzeye',
    },
    highlights: [
      'React 19 & Fiber Mimarisi Canlı Ağaç Görselleştirici',
      'useState, useEffect, useMemo, useCallback & Custom Hooks Labs',
      'Next.js 15+ App Router, Server Components & Streaming SSR',
      'Zustand, Context API & Modern State Management',
      'Performans Optimizasyonu, Memory Leak Önleme & Memoization',
      'İnteraktif Kod Simülatörü ve Anlık Test Ortamı'
    ],
    techStack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Fiber Reconciler', 'Zustand', 'Vite'],
    curriculum: [
      {
        category: 'Temel ve İleri React Konseptleri',
        items: [
          'React Felsefesi ve Declarative UI Mantığı',
          'JSX, Render Aşamaları ve Virtual DOM Mekaniği',
          'Component Lifecycle, Props ve State Yönetimi',
          'Tüm Temel ve İleri Seviye React Hookları'
        ]
      },
      {
        category: 'Mimari ve Derinlemesine Kavramlar',
        items: [
          'React Fiber Reconciler & Concurrent Mode',
          'Diffing Algoritması ve Reconciliation Ağacı',
          'Server Components (RSC) vs Client Components',
          'Custom Hooks Tasarım Desenleri'
        ]
      },
      {
        category: 'Modern State ve Next.js Ekosistemi',
        items: [
          'Context API vs Zustand vs Redux Toolkit Karşılaştırması',
          'Next.js App Router, Nested Layouts & Server Actions',
          'Streaming, Suspense & Progressive Hydration',
          'Production-Grade Proje Mimarisi ve Kodlama Pratikleri'
        ]
      }
    ],
    codePreview: {
      fileName: 'ModernReactHook.tsx',
      language: 'typescript',
      code: `import { useState, useTransition, useId } from 'react';

export function ModernSearchComponent() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const inputId = useId();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // UI responsive kalması için concurrent transition
    startTransition(() => {
      setQuery(value);
    });
  };

  return (
    <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30">
      <label htmlFor={inputId} className="text-cyan-400 font-mono text-sm">
        ⚡ React 19 Concurrent Search:
      </label>
      <input
        id={inputId}
        onChange={handleSearch}
        className="w-full mt-2 px-3 py-2 bg-slate-800 rounded border border-slate-700 text-white"
        placeholder="Bileşen ara..."
      />
      {isPending && <span className="text-xs text-amber-400 mt-1 block">Rendering Fiber Tree...</span>}
    </div>
  );
}`,
      outputTitle: 'React 19 Concurrent Fiber Pipeline',
      outputContent: '✓ Virtual DOM diffing complete (0.8ms)\n✓ Fiber workInProgress tree swapped to current\n✓ Concurrent priority: Low/Transition batch rendered'
    }
  },
  springboot: {
    id: 'springboot',
    title: 'Java & Spring Boot 3.x',
    subtitle: 'Mastery Hub & Enterprise Architecture',
    badge: 'BACKEND ENTERPRISE',
    tagline: 'Spring Boot 3.x, Java 21, Spring Security 6, JPA, Microservices & Filter Chains',
    description:
      'Kurumsal standartlarda modern Java ve Spring Boot ekosistemi. Spring Security 6 filtre zinciri simülatörü, JPA/Hibernate optimizasyonları, RESTful mikroservisler ve interaktif mimari laboratuvarı.',
    icon: 'spring',
    accentColor: 'emerald',
    primaryUrl: 'https://spring.tayfunucuncu.dev/',
    githubUrl: 'https://github.com/Tylefnx/learnspringboot',
    stats: {
      modules: 16,
      lessons: 56,
      interactiveSandboxes: 14,
      quizzes: 28,
      durationEstimate: '55+ Saat',
      level: 'Başlangıçtan İleri Düzeye',
    },
    highlights: [
      'Spring Security 6.x & JWT Filtre Zinciri Canlı Simülatörü',
      'Java 21 Virtual Threads, Records & Pattern Matching',
      'Spring Data JPA, Hibernate N+1 Problem Çözümleri & Indexing',
      'REST API Mimarisi, DTO Pattern & Global Exception Handling',
      'Mikroservisler, API Gateway, Eureka & Event-Driven Kafka',
      'İnteraktif Endpoint Simülatörü ve Test İstek Paneli'
    ],
    techStack: ['Java 21', 'Spring Boot 3.3+', 'Spring Security 6', 'Spring Data JPA', 'PostgreSQL', 'Docker', 'JWT'],
    curriculum: [
      {
        category: 'Spring Framework & Core Mimarisi',
        items: [
          'Inversion of Control (IoC) & Dependency Injection (DI)',
          'Spring Bean Yaşam Döngüsü ve Scopes',
          'Spring Boot Auto-Configuration Mekanizması',
          'Java 21 Modern Özellikleri (Virtual Threads, Records)'
        ]
      },
      {
        category: 'Veri Tabanı & Güvenlik Derinliği',
        items: [
          'Spring Data JPA, Repository Mimarisi & Specification API',
          'Hibernate Entity Lifecycles, Fetch Types & Query Optimization',
          'Spring Security 6 Mimarisi, SecurityFilterChain & JWT Auth',
          'OAuth2, Role/Authority Yetkilendirme & Method Security'
        ]
      },
      {
        category: 'Enterprise & Mikroservis Mimarisi',
        items: [
          'Production-Ready REST API Tasarımı & Validation',
          'Global Exception Handling, ControllerAdvice & ProblemDetail',
          'Dockerize Uygulamalar, Actuator & Cloud Hazırlığı',
          'Mikroservis İletişimi, Circuit Breaker & Caching Stratejileri'
        ]
      }
    ],
    codePreview: {
      fileName: 'AcademyApiController.java',
      language: 'java',
      code: `package com.tylefnx.academy.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/academy")
public class AcademyApiController {

    private final AcademyService academyService;

    public AcademyApiController(AcademyService academyService) {
        this.academyService = academyService;
    }

    @GetMapping("/track/{id}")
    public ResponseEntity<TrackResponse> getTrackDetails(@PathVariable String id) {
        TrackResponse response = academyService.findTrackById(id);
        return ResponseEntity.ok(response);
    }
}`,
      outputTitle: 'Spring Boot 3.3.x DispatcherServlet Pipeline',
      outputContent: '2026-09-27 INFO  [main] c.t.a.AcademyApplication : Started in 1.42 seconds (process running)\nHTTP/1.1 200 OK\nContent-Type: application/json;charset=UTF-8\n{"status": "SUCCESS", "track": "SPRING_BOOT_3", "secured": true}'
    }
  }
};

export const SEARCH_TOPICS: SearchTopic[] = [
  // React topics
  {
    id: 'react-fiber',
    title: 'React Fiber Mimarisi & Reconciliation',
    category: 'Mimari',
    track: 'reactjs',
    trackTitle: 'React JS Mastery Hub',
    url: 'https://react.tayfunucuncu.dev/#architecture',
    description: 'Fiber düğümleri, render ve commit aşamaları, concurrent mod mantığı.'
  },
  {
    id: 'react-hooks',
    title: 'useState, useEffect ve Custom Hooks',
    category: 'Hooks & State',
    track: 'reactjs',
    trackTitle: 'React JS Mastery Hub',
    url: 'https://react.tayfunucuncu.dev/#lessons',
    description: 'Tüm standart hookların derinlemesine incelenmesi ve kendi custom hookunuzu yazma.'
  },
  {
    id: 'react-nextjs',
    title: 'Next.js App Router & Server Components',
    category: 'Next.js',
    track: 'reactjs',
    trackTitle: 'React JS Mastery Hub',
    url: 'https://react.tayfunucuncu.dev/#lessons',
    description: 'RSC, Server Actions, Dynamic Routes ve Streaming SSR.'
  },
  {
    id: 'react-performance',
    title: 'React Performans & Memory Optimizasyonu',
    category: 'Optimizasyon',
    track: 'reactjs',
    trackTitle: 'React JS Mastery Hub',
    url: 'https://react.tayfunucuncu.dev/#recipes',
    description: 'useMemo, useCallback, memoization ve gereksiz re-renderları önleme.'
  },
  // Spring Boot topics
  {
    id: 'spring-security',
    title: 'Spring Security 6 & JWT Auth Filter Chain',
    category: 'Güvenlik',
    track: 'springboot',
    trackTitle: 'Spring Boot Mastery Hub',
    url: 'https://spring.tayfunucuncu.dev/#architecture',
    description: 'SecurityFilterChain mimarisi, OncePerRequestFilter, JWT token doğrulama.'
  },
  {
    id: 'spring-jpa',
    title: 'Spring Data JPA & Hibernate Optimizasyonu',
    category: 'Veritabanı',
    track: 'springboot',
    trackTitle: 'Spring Boot Mastery Hub',
    url: 'https://spring.tayfunucuncu.dev/#lessons',
    description: 'N+1 problemi, Entity yaşam döngüsü, Lazy/Eager fetching ve Criteria/Specification.'
  },
  {
    id: 'spring-ioc',
    title: 'IoC, Dependency Injection & Bean Lifecycle',
    category: 'Core Mimari',
    track: 'springboot',
    trackTitle: 'Spring Boot Mastery Hub',
    url: 'https://spring.tayfunucuncu.dev/#lessons',
    description: 'Spring Container, BeanScopes, @Configuration, @Component ve Lifecycle callbackleri.'
  },
  {
    id: 'spring-microservices',
    title: 'Mikroservisler, REST API & Exception Handling',
    category: 'Enterprise',
    track: 'springboot',
    trackTitle: 'Spring Boot Mastery Hub',
    url: 'https://spring.tayfunucuncu.dev/#recipes',
    description: 'Production-ready REST API yapısı, ControllerAdvice ve mikroservis iletişimleri.'
  }
];

export const COMPARISON_FEATURES = [
  {
    feature: 'Odak Alanı',
    react: 'Modern Web, SPA, SSR & Frontend Mimarisi',
    spring: 'Kurumsal Backend, RESTful API & Mikroservisler'
  },
  {
    feature: 'Çekirdek Dil',
    react: 'TypeScript / JavaScript (ESNext)',
    spring: 'Java 21 (LTS) / Modern Java'
  },
  {
    feature: 'Mimari Görselleştirici',
    react: 'Virtual DOM & Fiber Tree Reconciler',
    spring: 'Spring Security Filter Chain & DispatcherServlet'
  },
  {
    feature: 'İnteraktif Laboratuvar',
    react: 'Canlı React State & Custom Hook Sandbox',
    spring: 'İnteraktif Endpoint Simülatörü & Request Tester'
  },
  {
    feature: 'Dokümantasyon Dili',
    react: '%100 Türkçe & Örnek Projelerle Zenginleştirilmiş',
    spring: '%100 Türkçe & Kurumsal Senaryolarla Desteklenmiş'
  },
  {
    feature: 'Canlı Yayın Adresi',
    react: 'react.tayfunucuncu.dev',
    spring: 'spring.tayfunucuncu.dev'
  }
];
