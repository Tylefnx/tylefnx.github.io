import { CourseTrack, SearchTopic } from '../types';
import { Language } from '../i18n/translations';

export const getCoursesData = (lang: Language): Record<'reactjs' | 'springboot', CourseTrack> => {
  const isTr = lang === 'tr';

  return {
    reactjs: {
      id: 'reactjs',
      title: 'React JS & Next.js',
      subtitle: isTr ? 'Ek Dokümantasyon & Mimari Laboratuvarı' : 'Supplementary Docs & Architecture Labs',
      badge: 'FRONTEND ARCHITECTURE',
      tagline: isTr
        ? 'React 19, Fiber Reconciler, Custom Hooks, App Router & State Labs'
        : 'React 19, Fiber Reconciler, Custom Hooks, App Router & State Labs',
      description: isTr
        ? 'Resmi dokümantasyonun ötesine geçen kapsamlı referans. Virtual DOM ve Fiber mimarisi görselleştiricisi, interaktif hook laboratuvarları, Next.js App Router ve performans optimizasyonu reçeteleri.'
        : 'An in-depth supplementary developer reference beyond standard docs. Features Virtual DOM and Fiber reconciler visualizers, interactive hook sandboxes, Next.js App Router and performance recipes.',
      icon: 'react',
      accentColor: 'cyan',
      primaryUrl: 'https://reactjs.tayfunucuncu.dev/',
      githubUrl: 'https://github.com/Tylefnx/learnreactjs',
      stats: {
        modules: 14,
        lessons: 48,
        interactiveSandboxes: 12,
        durationEstimate: isTr ? '45+ Konu & Reçete' : '45+ Topics & Recipes',
        level: isTr ? 'Sıfırdan İleri Seviyeye' : 'Zero to Advanced',
      },
      highlights: isTr
        ? [
            'React 19 & Fiber Mimarisi Canlı Ağaç Görselleştirici',
            'useState, useEffect, useMemo, useCallback & Custom Hooks Labs',
            'Next.js 15+ App Router, Server Components & Streaming SSR',
            'Zustand, Context API & Modern State Yönetimi',
            'Performans Optimizasyonu, Memory Leak Önleme & Memoization',
            'İnteraktif Kod Simülatörü ve Anlık Test Ortamı'
          ]
        : [
            'React 19 & Fiber Architecture Live Tree Visualizer',
            'useState, useEffect, useMemo, useCallback & Custom Hooks Labs',
            'Next.js 15+ App Router, Server Components & Streaming SSR',
            'Zustand, Context API & Modern State Management',
            'Performance Optimization, Memory Leak Prevention & Memoization',
            'Interactive Code Sandbox and Runtime Testing Suite'
          ],
      techStack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Fiber Reconciler', 'Zustand', 'Vite'],
      curriculum: isTr
        ? [
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
          ]
        : [
            {
              category: 'Core & Advanced React Concepts',
              items: [
                'React Philosophy and Declarative UI Principles',
                'JSX, Render Phases & Virtual DOM Mechanics',
                'Component Lifecycle, Props and State Management',
                'Complete Core and Advanced React Hooks Reference'
              ]
            },
            {
              category: 'Architecture & Deep Mechanics',
              items: [
                'React Fiber Reconciler & Concurrent Mode',
                'Diffing Algorithm & Reconciliation Tree',
                'Server Components (RSC) vs Client Components',
                'Custom Hook Design Patterns'
              ]
            },
            {
              category: 'Modern State & Next.js Ecosystem',
              items: [
                'Context API vs Zustand vs Redux Toolkit Matrix',
                'Next.js App Router, Nested Layouts & Server Actions',
                'Streaming, Suspense & Progressive Hydration',
                'Production-Grade Architectural Recipes'
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
        outputTitle: isTr ? 'React 19 Concurrent Fiber Pipeline' : 'React 19 Concurrent Fiber Pipeline',
        outputContent: isTr
          ? '✓ Virtual DOM diffing tamamlandı (0.8ms)\n✓ Fiber workInProgress ağacı aktif ağaçla yer değiştirdi\n✓ Concurrent öncelik: Low/Transition batch render edildi'
          : '✓ Virtual DOM diffing complete (0.8ms)\n✓ Fiber workInProgress tree swapped to current\n✓ Concurrent priority: Low/Transition batch rendered'
      }
    },
    springboot: {
      id: 'springboot',
      title: 'Java & Spring Boot 3.x',
      subtitle: isTr ? 'Ek Dokümantasyon & Kurumsal Mimari' : 'Supplementary Docs & Enterprise Architecture',
      badge: 'BACKEND ENTERPRISE',
      tagline: isTr
        ? 'Spring Boot 3.x, Java 21, Spring Security 6, JPA, Microservices & Filter Chains'
        : 'Spring Boot 3.x, Java 21, Spring Security 6, JPA, Microservices & Filter Chains',
      description: isTr
        ? 'Kurumsal standartlarda modern Java ve Spring Boot ekosistemi. Spring Security 6 filtre zinciri simülatörü, JPA/Hibernate optimizasyonları, RESTful mikroservisler ve interaktif mimari laboratuvarı.'
        : 'Enterprise-grade reference for modern Java and Spring Boot ecosystem. Interactive Spring Security 6 filter chain simulator, JPA/Hibernate optimizations, RESTful microservices and architecture labs.',
      icon: 'spring',
      accentColor: 'emerald',
      primaryUrl: 'https://spring.tayfunucuncu.dev/',
      githubUrl: 'https://github.com/Tylefnx/learnspringboot',
      stats: {
        modules: 16,
        lessons: 56,
        interactiveSandboxes: 14,
        durationEstimate: isTr ? '55+ Konu & Reçete' : '55+ Topics & Recipes',
        level: isTr ? 'Sıfırdan İleri Seviyeye' : 'Zero to Advanced',
      },
      highlights: isTr
        ? [
            'Spring Security 6.x & JWT Filtre Zinciri Canlı Simülatörü',
            'Java 21 Virtual Threads, Records & Pattern Matching',
            'Spring Data JPA, Hibernate N+1 Problem Çözümleri & Indexing',
            'REST API Mimarisi, DTO Pattern & Global Exception Handling',
            'Mikroservisler, API Gateway, Eureka & Event-Driven Kafka',
            'İnteraktif Endpoint Simülatörü ve Test İstek Paneli'
          ]
        : [
            'Spring Security 6.x & JWT Filter Chain Interactive Simulator',
            'Java 21 Virtual Threads, Records & Pattern Matching',
            'Spring Data JPA, Hibernate N+1 Optimization & Indexing',
            'REST API Architecture, DTO Pattern & Global Exception Handling',
            'Microservices, API Gateway, Eureka & Event-Driven Kafka',
            'Interactive Endpoint Simulator & Request Testing Panel'
          ],
      techStack: ['Java 21', 'Spring Boot 3.3+', 'Spring Security 6', 'Spring Data JPA', 'PostgreSQL', 'Docker', 'JWT'],
      curriculum: isTr
        ? [
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
          ]
        : [
            {
              category: 'Spring Framework & Core Architecture',
              items: [
                'Inversion of Control (IoC) & Dependency Injection (DI)',
                'Spring Bean Lifecycles and Scopes',
                'Spring Boot Auto-Configuration Internals',
                'Java 21 Modern Language Features (Virtual Threads, Records)'
              ]
            },
            {
              category: 'Database & Security Deep Dive',
              items: [
                'Spring Data JPA, Repository Pattern & Specification API',
                'Hibernate Entity Lifecycles, Fetch Types & Query Tuning',
                'Spring Security 6 Internals, SecurityFilterChain & JWT Auth',
                'OAuth2, Role/Authority Authorization & Method Security'
              ]
            },
            {
              category: 'Enterprise & Microservices Architecture',
              items: [
                'Production-Ready REST API Design & Validation',
                'Global Exception Handling, ControllerAdvice & ProblemDetail',
                'Containerized Applications, Actuator & Cloud Readiness',
                'Microservice Communication, Circuit Breaker & Caching'
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
        outputTitle: isTr ? 'Spring Boot 3.3.x DispatcherServlet Pipeline' : 'Spring Boot 3.3.x DispatcherServlet Pipeline',
        outputContent: isTr
          ? '2026-09-27 INFO  [main] c.t.a.AcademyApplication : Başlatıldı (1.42 saniye)\nHTTP/1.1 200 OK\nContent-Type: application/json;charset=UTF-8\n{"status": "SUCCESS", "track": "SPRING_BOOT_3", "secured": true}'
          : '2026-09-27 INFO  [main] c.t.a.AcademyApplication : Started in 1.42 seconds (process running)\nHTTP/1.1 200 OK\nContent-Type: application/json;charset=UTF-8\n{"status": "SUCCESS", "track": "SPRING_BOOT_3", "secured": true}'
      }
    }
  };
};

export const getSearchTopics = (lang: Language): SearchTopic[] => {
  const isTr = lang === 'tr';

  return [
    {
      id: 'react-fiber',
      title: isTr ? 'React Fiber Mimarisi & Reconciliation' : 'React Fiber Architecture & Reconciliation',
      category: isTr ? 'Mimari' : 'Architecture',
      track: 'reactjs',
      trackTitle: 'React JS Mastery Hub',
      url: 'https://reactjs.tayfunucuncu.dev/#architecture',
      description: isTr
        ? 'Fiber düğümleri, render ve commit aşamaları, concurrent mod mantığı.'
        : 'Fiber nodes, render/commit phases, and concurrent mode mechanics.'
    },
    {
      id: 'react-hooks',
      title: isTr ? 'useState, useEffect ve Custom Hooks' : 'useState, useEffect and Custom Hooks',
      category: isTr ? 'Hooks & State' : 'Hooks & State',
      track: 'reactjs',
      trackTitle: 'React JS Mastery Hub',
      url: 'https://reactjs.tayfunucuncu.dev/#lessons',
      description: isTr
        ? 'Tüm standart hookların derinlemesine incelenmesi ve kendi custom hookunuzu yazma.'
        : 'In-depth breakdown of standard hooks and custom hook architectures.'
    },
    {
      id: 'react-nextjs',
      title: isTr ? 'Next.js App Router & Server Components' : 'Next.js App Router & Server Components',
      category: 'Next.js',
      track: 'reactjs',
      trackTitle: 'React JS Mastery Hub',
      url: 'https://reactjs.tayfunucuncu.dev/#lessons',
      description: isTr
        ? 'RSC, Server Actions, Dynamic Routes ve Streaming SSR.'
        : 'RSC, Server Actions, Dynamic Routes and Streaming SSR.'
    },
    {
      id: 'react-performance',
      title: isTr ? 'React Performans & Memory Optimizasyonu' : 'React Performance & Memory Optimization',
      category: isTr ? 'Optimizasyon' : 'Optimization',
      track: 'reactjs',
      trackTitle: 'React JS Mastery Hub',
      url: 'https://reactjs.tayfunucuncu.dev/#recipes',
      description: isTr
        ? 'useMemo, useCallback, memoization ve gereksiz re-renderları önleme.'
        : 'useMemo, useCallback, memoization and preventing redundant re-renders.'
    },
    {
      id: 'spring-security',
      title: isTr ? 'Spring Security 6 & JWT Auth Filter Chain' : 'Spring Security 6 & JWT Auth Filter Chain',
      category: isTr ? 'Güvenlik' : 'Security',
      track: 'springboot',
      trackTitle: 'Spring Boot Mastery Hub',
      url: 'https://spring.tayfunucuncu.dev/#architecture',
      description: isTr
        ? 'SecurityFilterChain mimarisi, OncePerRequestFilter, JWT token doğrulama.'
        : 'SecurityFilterChain architecture, OncePerRequestFilter, JWT validation.'
    },
    {
      id: 'spring-jpa',
      title: isTr ? 'Spring Data JPA & Hibernate Optimizasyonu' : 'Spring Data JPA & Hibernate Optimization',
      category: isTr ? 'Veritabanı' : 'Database',
      track: 'springboot',
      trackTitle: 'Spring Boot Mastery Hub',
      url: 'https://spring.tayfunucuncu.dev/#lessons',
      description: isTr
        ? 'N+1 problemi, Entity yaşam döngüsü, Lazy/Eager fetching ve Criteria API.'
        : 'N+1 problem, Entity lifecycle, Lazy/Eager fetching and Criteria API.'
    },
    {
      id: 'spring-ioc',
      title: isTr ? 'IoC, Dependency Injection & Bean Lifecycle' : 'IoC, Dependency Injection & Bean Lifecycle',
      category: isTr ? 'Core Mimari' : 'Core Architecture',
      track: 'springboot',
      trackTitle: 'Spring Boot Mastery Hub',
      url: 'https://spring.tayfunucuncu.dev/#lessons',
      description: isTr
        ? 'Spring Container, BeanScopes, @Configuration, @Component ve Lifecycle callbackleri.'
        : 'Spring Container, BeanScopes, @Configuration, @Component and Lifecycle callbacks.'
    },
    {
      id: 'spring-microservices',
      title: isTr ? 'Mikroservisler, REST API & Exception Handling' : 'Microservices, REST API & Exception Handling',
      category: 'Enterprise',
      track: 'springboot',
      trackTitle: 'Spring Boot Mastery Hub',
      url: 'https://spring.tayfunucuncu.dev/#recipes',
      description: isTr
        ? 'Production-ready REST API yapısı, ControllerAdvice ve mikroservis iletişimleri.'
        : 'Production-ready REST API structure, ControllerAdvice and microservice patterns.'
    }
  ];
};

export const getComparisonFeatures = (lang: Language) => {
  const isTr = lang === 'tr';

  return isTr
    ? [
        {
          feature: 'Mimari Odak',
          react: 'Modern Web, SPA, SSR & Frontend Mimarisi',
          spring: 'Kurumsal Backend, RESTful API & Mikroservisler'
        },
        {
          feature: 'Çekirdek Dil / Standart',
          react: 'TypeScript / Modern JavaScript (ESNext)',
          spring: 'Java 21 (LTS) / Modern Java'
        },
        {
          feature: 'Canlı Mimari Görselleştirici',
          react: 'Virtual DOM & Fiber Tree Reconciler',
          spring: 'Spring Security Filter Chain & DispatcherServlet'
        },
        {
          feature: 'İnteraktif Laboratuvar',
          react: 'Canlı React State & Custom Hook Sandbox',
          spring: 'İnteraktif Endpoint Simülatörü & Request Tester'
        },
        {
          feature: 'Dokümantasyon Türü',
          react: 'Ek Dokümantasyon & İnteraktif Reçeteler',
          spring: 'Ek Dokümantasyon & Kurumsal Mimari Şemalar'
        },
        {
          feature: 'Canlı Yayın Adresi',
          react: 'reactjs.tayfunucuncu.dev',
          spring: 'spring.tayfunucuncu.dev'
        }
      ]
    : [
        {
          feature: 'Architectural Focus',
          react: 'Modern Web, SPA, SSR & Frontend Architecture',
          spring: 'Enterprise Backend, RESTful APIs & Microservices'
        },
        {
          feature: 'Core Language / Standard',
          react: 'TypeScript / Modern JavaScript (ESNext)',
          spring: 'Java 21 (LTS) / Modern Java'
        },
        {
          feature: 'Live Architecture Visualizer',
          react: 'Virtual DOM & Fiber Tree Reconciler',
          spring: 'Spring Security Filter Chain & DispatcherServlet'
        },
        {
          feature: 'Interactive Sandbox',
          react: 'Live React State & Custom Hook Playground',
          spring: 'Interactive Endpoint Simulator & Request Tester'
        },
        {
          feature: 'Documentation Type',
          react: 'Supplementary Reference & Interactive Recipes',
          spring: 'Supplementary Reference & Architecture Flowcharts'
        },
        {
          feature: 'Live Deployment URL',
          react: 'reactjs.tayfunucuncu.dev',
          spring: 'spring.tayfunucuncu.dev'
        }
      ];
};
