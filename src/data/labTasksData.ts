import { LabTask } from '../types';
import { Language } from '../i18n/translations';

export const getLabTasks = (lang: Language): LabTask[] => {
  const isTr = lang === 'tr';

  return [
    // React Tasks
    {
      id: 'react-lab-1',
      title: isTr ? 'Lab #1: Concurrent Debounce & Arama Uygulaması' : 'Lab #1: Concurrent Debounce & Fast Search App',
      track: 'reactjs',
      difficulty: 'Core',
      chaptersCovered: isTr ? 'Bölüm 2 & 4: Virtual DOM & Custom Hooks' : 'Chapters 2 & 4: Virtual DOM & Custom Hooks',
      scenario: isTr
        ? 'Büyük veri listesinde kullanıcının her tuşa basışında arayüzü kilitlemeyen, `useTransition` ve özel bir `useDebounce` hook\'u kullanan gerçek zamanlı bir arama uygulaması yazın.'
        : 'Build a high-performance search interface on large datasets using `useTransition` and a custom `useDebounce` hook that keeps the UI responsive during rapid keystrokes.',
      appGoal: isTr
        ? 'Hızlı arama kutusu, anlık debounce gecikmesi (300ms), AbortController ile eski istekleri iptal etme ve concurrent Fiber render geçişi.'
        : 'Instant responsive input, 300ms debounce delay, AbortController request cleanup, and concurrent Fiber rendering priority.',
      requirements: isTr
        ? [
            'useDebounce custom hook\'u yazılmalı ve timer cleanup mekanizması içermelidir.',
            'Arama durumu güncellenirken input alanının donmaması için `startTransition` kullanılmalıdır.',
            'Kullanıcı arama terimini sildiğinde veya değiştirdiğinde önceki bekleyen API istekleri AbortSignal ile iptal edilmelidir.',
            'Boş arama durumlarında veya veri yüklenirken zarif bir Skeleton/Spinner gösterilmelidir.'
          ]
        : [
            'Implement a custom `useDebounce` hook with full timer cleanup on unmount.',
            'Wrap heavy search state updates with `startTransition` to prevent input latency.',
            'Cancel in-flight network requests using `AbortController` when query updates.',
            'Render graceful skeleton fallback states during async transitions.'
          ],
      starterSnippet: {
        fileName: 'useDebouncedSearch.ts',
        language: 'typescript',
        code: `// GÖREV: useDebounce hook'u ve useTransition entegrasyonu
export function useDebouncedSearch<T>(fetchFn: (q: string, signal: AbortSignal) => Promise<T[]>, delay = 300) {
  // TODO: useState, useTransition ve abort ref mekanizmasını kurun
  return { results: [], isSearching: false, handleSearch: (query: string) => {} };
}`
      },
      solutionBlueprint: {
        explanation: isTr
          ? 'Fiber mimarisinde düşük öncelikli render işlemlerini `useTransition` ile işaretleyerek input bileşeninin 60 FPS hızında akıcı kalmasını sağlarız.'
          : 'In React Fiber, marking search updates with `useTransition` ensures input typing maintains 60 FPS responsiveness while results render in transition priority.',
        code: `import { useState, useEffect, useTransition, useRef } from 'react';

export function useDebouncedSearch<T>(
  fetchFn: (query: string, signal: AbortSignal) => Promise<T[]>,
  delay = 300
) {
  const [results, setResults] = useState<T[]>([]);
  const [isPending, startTransition] = useTransition();
  const abortControllerRef = useRef<AbortController | null>(null);

  const search = (query: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const timer = setTimeout(() => {
      fetchFn(query, controller.signal)
        .then((data) => {
          startTransition(() => {
            setResults(data);
          });
        })
        .catch((err) => {
          if (err.name !== 'AbortError') console.error(err);
        });
    }, delay);

    return () => clearTimeout(timer);
  };

  return { results, isSearching: isPending, search };
}`
      },
      docUrl: 'https://reactjs.tayfunucuncu.dev/#lessons'
    },
    {
      id: 'react-lab-2',
      title: isTr ? 'Lab #2: İyimser (Optimistic) State & Sepet Motoru' : 'Lab #2: Optimistic UI & Reactive Cart Engine',
      track: 'reactjs',
      difficulty: 'Advanced',
      chaptersCovered: isTr ? 'Bölüm 5 & 8: State Management & Performance' : 'Chapters 5 & 8: State Management & Performance',
      scenario: isTr
        ? 'Kullanıcı bir ürünü sepete eklediğinde sunucu yanıtını beklemeden UI\'ı anında güncelleyen, sunucudan hata dönerse otomatik geri alan (rollback) bir Optimistic State motoru yazın.'
        : 'Create an Optimistic UI state manager for an e-commerce cart that instantly updates the UI, rolls back on backend failure, and uses memoized selectors.',
      appGoal: isTr
        ? 'İyimser artırma/azaltma, hata anında eski state snapshot\'ına rollback yapma, localStorage senkronizasyonu ve sıfır re-render maliyeti.'
        : 'Optimistic item additions, automated state rollback on API error, localStorage persistence, and zero unnecessary re-renders.',
      requirements: isTr
        ? [
            'Bileşenlerin sadece dinledikleri alanlar değiştiğinde render olması için seçici (selector) deseni kullanılmalıdır.',
            'İstek başarısız olduğunda (500/400) önceki state\'e otomatik geri dönüş (rollback snapshot) yapılmalıdır.',
            'State güncellemeleri localStorage ile senkronize tutulmalıdır.',
            'Sepet toplam tutarı useMemo veya zustand compute ile memoize edilmelidir.'
          ]
        : [
            'Use granular selector subscriptions to prevent whole-tree re-renders.',
            'Store snapshot of previous state to rollback automatically on mutation failure.',
            'Persist state to localStorage with hydration safety.',
            'Memoize total calculations to avoid recalculation on unrelated updates.'
          ],
      starterSnippet: {
        fileName: 'cartStore.ts',
        language: 'typescript',
        code: `// GÖREV: Optimistic cart store tasarımı
interface CartItem { id: string; name: string; price: number; quantity: number; }

export function createCartStore() {
  // TODO: Optimistic update & Rollback mekanizması
}`
      },
      solutionBlueprint: {
        explanation: isTr
          ? 'Optimistic UI güncellemelerinde mutasyondan önce snapshot alınır; API hatası yakalandığında state anında bu snapshot durumuna geri döndürülür.'
          : 'In Optimistic UI patterns, an immutable snapshot is preserved before mutation; on network reject, the state reverts back cleanly to this snapshot.',
        code: `export interface CartItem { id: string; name: string; price: number; qty: number; }

export class OptimisticCartEngine {
  private items: CartItem[] = [];
  private history: CartItem[][] = [];

  public async addItemOptimistic(item: CartItem, apiCall: () => Promise<void>) {
    // 1. Snapshot kaydet
    this.history.push([...this.items]);
    // 2. Anında UI güncelle
    const existing = this.items.find(i => i.id === item.id);
    if (existing) existing.qty += 1;
    else this.items.push({ ...item, qty: 1 });

    try {
      await apiCall();
      this.history.shift(); // Başarılı, eski snapshot'ı temizle
    } catch (err) {
      // 3. Hata durumunda rollback
      this.items = this.history.pop() || [];
      throw new Error('İşlem başarısız, sepet eski haline döndürüldü.');
    }
  }
}`
      },
      docUrl: 'https://reactjs.tayfunucuncu.dev/#recipes'
    },
    {
      id: 'react-lab-3',
      title: isTr ? 'Lab #3: Next.js 15 Streaming Dashboard & Server Actions' : 'Lab #3: Next.js 15 Streaming Dashboard & Server Actions',
      track: 'reactjs',
      difficulty: 'Enterprise',
      chaptersCovered: isTr ? 'Bölüm 9 & 11: Next.js App Router & Server Actions' : 'Chapters 9 & 11: Next.js App Router & Server Actions',
      scenario: isTr
        ? 'Farklı hızda yüklenen 3 veri bloğunu (Gelir Tablosu, Canlı Loglar, Kullanıcı Listesi) Suspense ile parça parça stream eden ve Server Action ile form gönderen bir Dashboard mimarisi tasarlayın.'
        : 'Architect a Next.js 15 analytics dashboard streaming 3 distinct slow data sources with Suspense boundaries and progressive form mutation via Server Actions.',
      appGoal: isTr
        ? 'SSR Streaming, anında First Contentful Paint (FCP), progressive hydration ve zero-JS server mutasyonu.'
        : 'Streaming SSR, sub-second FCP, progressive hydration, and progressive enhancement form mutations.',
      requirements: isTr
        ? [
            'Yavaş veri kaynakları bağımsız `<Suspense fallback={<CardSkeleton />}>` sınırlarına alınmalıdır.',
            'Veri mutasyonları için `"use server"` direktifli Server Actions kullanılmalı ve `revalidatePath` çağrılmalıdır.',
            'Client bileşenleri sadece interaktif buton/grafik alanlarında `"use client"` ile izole edilmelidir.'
          ]
        : [
            'Wrap slow async data components with isolated `<Suspense fallback={<Skeleton />}>` boundaries.',
            'Implement mutations with `"use server"` Server Actions and call `revalidatePath`.',
            'Isolate client boundaries strictly to interactive graph/control islands.'
          ],
      starterSnippet: {
        fileName: 'DashboardPage.tsx',
        language: 'typescript',
        code: `// GÖREV: Suspense streaming boundaries & Server Action
export default async function DashboardPage() {
  // TODO: Paralel stream bileşenlerini Suspense ile render edin
  return <div className="grid grid-cols-3 gap-4">...</div>;
}`
      },
      solutionBlueprint: {
        explanation: isTr
          ? 'Next.js App Router ve React Server Components ile sunucudan HTML parçacıkları HTTP stream ile parça parça gönderilir; yavaş sorgular tüm sayfanın yüklenmesini geciktirmez.'
          : 'With React Server Components, HTML chunks stream progressively over HTTP; slow backend queries never block the fast shell or other widgets from rendering.',
        code: `import { Suspense } from 'react';
import { revalidatePath } from 'next/cache';

// Server Action
async function updateMetricsAction(formData: FormData) {
  'use server';
  const metric = formData.get('metric');
  // DB update
  revalidatePath('/dashboard');
}

export default async function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <Suspense fallback={<div className="h-48 bg-slate-900 animate-pulse rounded-xl" />}>
        <RevenueStreamWidget />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-slate-900 animate-pulse rounded-xl" />}>
        <LiveActivityLogsWidget />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-slate-900 animate-pulse rounded-xl" />}>
        <UserDemographicsWidget />
      </Suspense>
    </div>
  );
}`
      },
      docUrl: 'https://reactjs.tayfunucuncu.dev/#lessons'
    },

    // Spring Boot Tasks
    {
      id: 'spring-lab-1',
      title: isTr ? 'Lab #4: Spring Security 6 & JWT Multi-Tenant Filtresi' : 'Lab #4: Spring Security 6 & JWT Multi-Tenant Filter',
      track: 'springboot',
      difficulty: 'Core',
      chaptersCovered: isTr ? 'Bölüm 4 & 5: Spring Security 6 & Custom Filters' : 'Chapters 4 & 5: Spring Security 6 & Custom Filters',
      scenario: isTr
        ? 'Gelen HTTP isteklerindeki Bearer token\'ı ayrıştırıp doğrulayan, Tenant ID\'yi `ThreadLocal` context\'e yazan ve geçerli değilse 401 Unauthorized dönen bir `OncePerRequestFilter` yazın.'
        : 'Develop a custom `OncePerRequestFilter` in Spring Security 6 that parses RSA/HMAC JWT tokens, sets authentication in `SecurityContextHolder`, and isolates TenantContext.',
      appGoal: isTr
        ? 'Stateless JWT doğrulaması, SecurityFilterChain entegrasyonu, ThreadLocal temizliği (cleanup) ve rol bazlı yetkilendirme.'
        : 'Stateless JWT verification, SecurityFilterChain integration, ThreadLocal cleanup, and role-based authorization.',
      requirements: isTr
        ? [
            '`OncePerRequestFilter` sınıfından türetilen özel `JwtAuthenticationFilter` yazılmalıdır.',
            'Token geçerliyse `UsernamePasswordAuthenticationToken` oluşturulup `SecurityContextHolder`a atanmalıdır.',
            'Filtrenin en sonunda `filterChain.doFilter(request, response)` çağrılmalı ve finally bloğunda ThreadLocal temizlenmelidir.',
            '`SecurityFilterChain` Bean\'inde `.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)` ile zincire eklenmelidir.'
          ]
        : [
            'Extend `OncePerRequestFilter` to construct a dedicated `JwtAuthFilter`.',
            'Validate token and set `UsernamePasswordAuthenticationToken` in `SecurityContextHolder`.',
            'Ensure `filterChain.doFilter` is invoked and clean up `ThreadLocal` in a finally block.',
            'Register filter before `UsernamePasswordAuthenticationFilter.class` in `SecurityFilterChain`.'
          ],
      starterSnippet: {
        fileName: 'JwtAuthFilter.java',
        language: 'java',
        code: `// GÖREV: Spring Security 6 OncePerRequestFilter
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain) {
        // TODO: Token ayrıştırma ve SecurityContext ayarlama
    }
}`
      },
      solutionBlueprint: {
        explanation: isTr
          ? 'Spring Security 6\'da filtreler doğrudan zincirleme (FilterChain) mantığıyla çalışır. ThreadLocal sızıntılarını önlemek için filtre bitiminde temizlik hayati önem taşır.'
          : 'In Spring Security 6, filter chains process requests sequentially. Cleaning up ThreadLocal contexts in finally blocks prevents thread-pool contamination.',
        code: `package com.tylefnx.notes.security;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.Collections;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenService tokenService;

    public JwtAuthenticationFilter(JwtTokenService tokenService) {
        this.tokenService = tokenService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            if (tokenService.validateToken(token)) {
                String username = tokenService.extractUsername(token);
                var auth = new UsernamePasswordAuthenticationToken(username, null, Collections.emptyList());
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }

        try {
            filterChain.doFilter(request, response);
        } finally {
            // ThreadLocal context temizliği
            TenantContext.clear();
        }
    }
}`
      },
      docUrl: 'https://spring.tayfunucuncu.dev/#architecture'
    },
    {
      id: 'spring-lab-2',
      title: isTr ? 'Lab #5: Java 21 Virtual Threads ile Yüksek Trafikli Webhook Servisi' : 'Lab #5: High-Throughput Webhook Engine with Java 21 Virtual Threads',
      track: 'springboot',
      difficulty: 'Advanced',
      chaptersCovered: isTr ? 'Bölüm 3 & 8: Java 21 Virtual Threads & Async Processing' : 'Chapters 3 & 8: Java 21 Virtual Threads & Async Processing',
      scenario: isTr
        ? 'Saniyede 10.000+ webhook isteğini minimum bellek tüketimiyle karşılayıp dış 3. parti API\'lara dağıtan, Java 21 Virtual Threads kullanan asenkron bir bildirim servisi geliştirin.'
        : 'Build an asynchronous webhook delivery service utilizing Java 21 Virtual Threads capable of handling 10,000+ concurrent requests without thread exhaustion.',
      appGoal: isTr
        ? 'Sıfır ThreadPool boğulması (zero exhaustion), Virtual Threads (`Executors.newVirtualThreadPerTaskExecutor`), Structured Concurrency ve sub-10ms gecikme.'
        : 'Zero thread-pool exhaustion, Virtual Thread task executors, structured concurrency, and sub-10ms latency.',
      requirements: isTr
        ? [
            'Spring Boot 3.2+ konfigürasyonunda `spring.threads.virtual.enabled=true` aktif edilmelidir.',
            '`AsyncTaskExecutor` bean\'i `Executors.newVirtualThreadPerTaskExecutor()` ile yapılandırılmalıdır.',
            'I/O bloklayan dış API çağrıları `@Async` metotlar üzerinden sanal thread havuzunda çalıştırılmalıdır.'
          ]
        : [
            'Configure `spring.threads.virtual.enabled=true` in application properties.',
            'Declare `AsyncTaskExecutor` utilizing `Executors.newVirtualThreadPerTaskExecutor()`.',
            'Dispatch I/O bound external notifications via `@Async` over virtual threads.'
          ],
      starterSnippet: {
        fileName: 'VirtualThreadConfig.java',
        language: 'java',
        code: `// GÖREV: Java 21 Virtual Thread Executor yapılandırması
@Configuration
public class AsyncVirtualThreadConfig {
    // TODO: Virtual thread executor bean tanımlayın
}`
      },
      solutionBlueprint: {
        explanation: isTr
          ? 'Platform thread\'ler (1 MB stack) yerine Java 21 Virtual Thread\'ler (birkaç byte heap) kullanarak, bloklanan I/O operasyonlarında işletim sistemi thread\'lerini meşgul etmeden yüz binlerce eşzamanlı istek işleyebiliriz.'
          : 'Virtual Threads in Java 21 detach from carrier OS threads during blocking socket I/O, allowing millions of concurrent requests with lightweight heap footprints.',
        code: `package com.tylefnx.notes.config;

import org.springframework.boot.web.embedded.tomcat.TomcatProtocolHandlerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.AsyncTaskExecutor;
import org.springframework.core.task.support.TaskExecutorAdapter;
import java.util.concurrent.Executors;

@Configuration
public class VirtualThreadConfig {

    @Bean
    public AsyncTaskExecutor applicationTaskExecutor() {
        return new TaskExecutorAdapter(Executors.newVirtualThreadPerTaskExecutor());
    }

    @Bean
    public TomcatProtocolHandlerCustomizer<?> protocolHandlerVirtualThreadCustomizer() {
        return protocolHandler -> protocolHandler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
    }
}`
      },
      docUrl: 'https://spring.tayfunucuncu.dev/#lessons'
    },
    {
      id: 'spring-lab-3',
      title: isTr ? 'Lab #6: JPA Specification & N+1 Problem Çözümü' : 'Lab #6: JPA Specification & N+1 Query Optimizer',
      track: 'springboot',
      difficulty: 'Enterprise',
      chaptersCovered: isTr ? 'Bölüm 6 & 7: Spring Data JPA & Hibernate Performance' : 'Chapters 6 & 7: Spring Data JPA & Hibernate Performance',
      scenario: isTr
        ? 'Dinamik çoklu filtreleme (kategori, fiyat aralığı, stok durumu, etiketler) yapan ve ilişkili alt tabloları çekerken N+1 sorgu problemi yaratmayan bir JPA Repository katmanı inşa edin.'
        : 'Build a dynamic multi-criteria JPA query engine with Specifications and `@EntityGraph` join fetches to eradicate N+1 query bottlenecks on large relational datasets.',
      appGoal: isTr
        ? 'JPA Specification API, `EntityGraph` ile tek sorguda JOIN çekme, SQL sorgu loglarında 1 sorgu garantisi ve dinamik `Predicate` birleştirme.'
        : 'JPA Specification API, `@EntityGraph` eager join fetching in 1 single SQL query, and dynamic `Predicate` composition.',
      requirements: isTr
        ? [
            '`JpaSpecificationExecutor<Product>` arayüzü repository\'ye entegre edilmelidir.',
            'İlişkili `Category` ve `Tags` listesini tek sorguda getirmek için `@EntityGraph(attributePaths = {"category", "tags"})` kullanılmalıdır.',
            'Dinamik filtreler için `Specification<Product>` sınıfları `Specification.allOf(...)` ile birleştirilmelidir.'
          ]
        : [
            'Extend `JpaSpecificationExecutor<Product>` in the repository interface.',
            'Annotate queries with `@EntityGraph(attributePaths = {"category", "tags"})` to eliminate N+1.',
            'Compose dynamic filtering with `Specification.where().and(...)` predicate builders.'
          ],
      starterSnippet: {
        fileName: 'ProductSpecification.java',
        language: 'java',
        code: `// GÖREV: JPA Specification & EntityGraph
public class ProductSpecifications {
    // TODO: Dynamic Predicate builders
}`
      },
      solutionBlueprint: {
        explanation: isTr
          ? 'Hibernate\'in en büyük performans tuzağı olan N+1 problemi, `@EntityGraph` kullanılarak SQL `LEFT JOIN` seviyesine indirgenir ve yüzlerce gereksiz SELECT sorgusu engellenir.'
          : 'The N+1 problem occurs when Hibernate executes individual child SELECT queries; `@EntityGraph` forces a single optimized `LEFT JOIN` SQL execution.',
        code: `package com.tylefnx.notes.repository;

import com.tylefnx.notes.entity.Product;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

    @Override
    @EntityGraph(attributePaths = {"category", "tags"})
    Page<Product> findAll(Specification<Product> spec, Pageable pageable);
}`
      },
      docUrl: 'https://spring.tayfunucuncu.dev/#lessons'
    }
  ];
};
