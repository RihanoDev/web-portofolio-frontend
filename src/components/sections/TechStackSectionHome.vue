<template>
  <section id="techstack-home" class="py-8 md:py-12 lg:py-16 xl:py-20 flex flex-col items-center relative overflow-visible">
    <div class="text-center mb-6 md:mb-8 lg:mb-10 xl:mb-12 relative z-10">
      <div class="flex flex-col items-center mb-4 md:mb-6 lg:mb-8">
        <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-2">{{ $t('techstack.title') }}</h2>
        <div class="w-20 h-1 rounded bg-accent transition-colors"></div>
      </div>      
      <p class="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-base md:text-lg lg:text-xl px-4" style="color: var(--color-text-secondary);">
        {{ $t('techstack.subtitle') }}
      </p>
    </div>
    
    <div class="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-full mx-auto overflow-visible px-4 lg:px-6 xl:px-8" style="padding-top: 20px; padding-bottom: 20px;">
      <!-- Row 1 - Moving Right -->
      <div class="tech-row overflow-visible mb-3 relative" style="padding: 15px 0;">
        <div class="marquee-container">
          <div class="marquee-content marquee-right">
            <div 
              v-for="(tech, index) in [...techRows[0], ...techRows[0]]" 
              :key="`row1-${index}`"
              class="tech-card group flex items-center gap-2 px-4 py-2 rounded-xl glass-card whitespace-nowrap hover:z-20 relative"
            >
              <div class="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  v-if="getDevIconUrl(tech)" 
                  :src="getDevIconUrl(tech)" 
                  :alt="tech"
                  class="w-6 h-6 object-contain"
                  loading="lazy"
                />
                <component 
                  v-else
                  :is="getTechIcon(tech)" 
                  class="w-6 h-6" 
                />
              </div>
              <span class="font-medium text-sm transition-colors duration-300" 
                    style="color: var(--color-text-primary);">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2 - Moving Left -->
      <div class="tech-row overflow-visible mb-3 relative" style="padding: 15px 0;">
        <div class="marquee-container">
          <div class="marquee-content marquee-left">
            <div 
              v-for="(tech, index) in [...techRows[1], ...techRows[1]]" 
              :key="`row2-${index}`"
              class="tech-card group flex items-center gap-2 px-4 py-2 rounded-xl glass-card whitespace-nowrap hover:z-20 relative"
            >
              <div class="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  v-if="getDevIconUrl(tech)" 
                  :src="getDevIconUrl(tech)" 
                  :alt="tech"
                  class="w-6 h-6 object-contain"
                  loading="lazy"
                />
                <component 
                  v-else
                  :is="getTechIcon(tech)" 
                  class="w-6 h-6" 
                />
              </div>
              <span class="font-medium text-sm transition-colors duration-300" 
                    style="color: var(--color-text-primary);">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 3 - Moving Right -->
      <div class="tech-row overflow-visible relative" style="padding: 15px 0;">
        <div class="marquee-container">
          <div class="marquee-content marquee-right-slow">
            <div 
              v-for="(tech, index) in [...techRows[2], ...techRows[2]]" 
              :key="`row3-${index}`"
              class="tech-card group flex items-center gap-2 px-4 py-2 rounded-xl glass-card whitespace-nowrap hover:z-20 relative"
            >
              <div class="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  v-if="getDevIconUrl(tech)" 
                  :src="getDevIconUrl(tech)" 
                  :alt="tech"
                  class="w-6 h-6 object-contain"
                  loading="lazy"
                />
                <component 
                  v-else
                  :is="getTechIcon(tech)" 
                  class="w-6 h-6" 
                />
              </div>
              <span class="font-medium text-sm transition-colors duration-300" 
                    style="color: var(--color-text-primary);">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
              

<script setup lang="ts">
import { h } from 'vue'

// Tech stacks divided into 3 rows
const techs = [
  'Golang', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'MongoDB', 'GraphQL', 'AWS', 'Linux', 'TypeScript', 'Vue.js', 'React', 'TailwindCSS', 'Git', 'Nginx', 'Prometheus', 'Grafana', 'DBeaver', 'MySQL', 'Postman', 'GitHub', 'GitLab'
]

const techRows = [
  techs.slice(0, 8),  // Row 1: 8 items
  techs.slice(8, 16), // Row 2: 8 items
  techs.slice(16, 24) // Row 3: 8 items
]

// Function to get DevIcon CDN URLs
const getDevIconUrl = (tech: string) => {
  const iconMap: Record<string, string> = {
    'Golang': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'TailwindCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    'Grafana': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'DBeaver': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    'Prometheus': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'GitLab': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'
  }
  
  return iconMap[tech] || ''
}

// Function to get tech icons with better SVG designs
const getTechIcon = (tech: string) => {
  const icons: Record<string, any> = {
    'Golang': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('path', { d: 'M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.059-.117.059H1.811zm-.105 1.619c-.047 0-.058-.024-.035-.059l.246-.315c.023-.035.081-.059.128-.059h4.694c.047 0 .059.035.035.070l-.175.292c-.023.035-.081.070-.117.070H1.706zm-.211 1.457c-.047 0-.058-.023-.035-.058l.199-.315c.023-.036.081-.059.128-.059h2.847c.047 0 .058.035.035.070l-.175.303c-.023.035-.081.058-.117.058H1.495z', fill: '#00ADD8' }),
      h('path', { d: 'M8.411 10.231h-1.045c-.035 0-.058-.023-.058-.058v-.245c0-.035.023-.058.058-.058h2.828c.034 0 .058.023.058.058v.245c0 .035-.024.058-.058.058h-1.04v3.441c0 .035-.023.058-.058.058h-.627c-.035 0-.058-.023-.058-.058v-3.441z', fill: '#00ADD8' })
    ]),
    'Node.js': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('path', { d: 'M12 1.85c-.27 0-.55.074-.795.202l-8.28 4.81c-.49.283-.925.865-.925 1.441v9.394c0 .576.435 1.158.925 1.441l8.28 4.81c.49.283 1.1.283 1.59 0l8.28-4.81c.49-.283.925-.865.925-1.441V8.308c0-.576-.435-1.158-.925-1.441L12.795 2.052c-.245-.128-.525-.202-.795-.202z', fill: '#8CC84B' }),
      h('path', { d: 'M12 15.7c-.2 0-.4-.05-.58-.15l-1.84-1.09c-.27-.15-.14-.21-.05-.24.36-.13.43-.16.81-.38.04-.02.09-.01.13.01l1.41.84c.05.03.12.03.17 0l5.5-3.18c.05-.03.08-.09.08-.15V8.07c0-.06-.03-.12-.08-.15l-5.5-3.18c-.05-.03-.12-.03-.17 0L6.38 7.92c-.05.03-.08.09-.08.15v6.36c0 .06.03.12.08.15l1.51.87c.82.41 1.32-.07 1.32-.56V8.73c0-.09.07-.16.16-.16h.69c.09 0 .16.07.16.16v6.17c0 1.07-.58 1.69-1.6 1.69-.31 0-.56 0-1.24-.34l-1.44-.83c-.36-.21-.58-.59-.58-1.01V8.05c0-.42.22-.8.58-1.01l5.5-3.18c.35-.2.81-.2 1.16 0l5.5 3.18c.36.21.58.59.58 1.01v6.36c0 .42-.22.8-.58 1.01l-5.5 3.18c-.18.1-.38.15-.58.15z', fill: '#8CC84B' })
    ]),
    'PostgreSQL': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('path', { d: 'M17.128 0c.88 0 1.59.71 1.59 1.59s-.71 1.59-1.59 1.59-1.59-.71-1.59-1.59S16.248 0 17.128 0zm2.69 24h-1.78c-.39 0-.71-.32-.71-.71v-6.4h-.53v6.4c0 .39-.32.71-.71.71h-1.78c-.39 0-.71-.32-.71-.71V9.51h5.52v13.78c0 .39-.32.71-.71.71z', fill: '#336791' }),
      h('ellipse', { cx: '12', cy: '6', rx: '8', ry: '3', fill: '#336791' }),
      h('path', { d: 'M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6c0 1.66-3.58 3-8 3S4 7.66 4 6z', fill: '#336791' }),
      h('path', { d: 'M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6c0 1.66-3.58 3-8 3s-8-1.34-8-3z', fill: '#336791' })
    ]),
    'Redis': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z', fill: '#DC382D' }),
      h('path', { d: 'M7.5 8.5h9v7h-9z', fill: 'white' }),
      h('path', { d: 'M8.5 10h7M8.5 12h7M8.5 14h5', stroke: '#DC382D', strokeWidth: '0.5' })
    ]),
    'Docker': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('path', { d: 'M13.5 11h-2v-2h2v2zm0-3h-2V6h2v2zM10.5 11h-2v-2h2v2zm0-3h-2V6h2v2zm0 6h-2v-2h2v2zM7.5 11h-2v-2h2v2zm0 3h-2v-2h2v2zm6-6h-2V6h2v2zm0 3h-2v-2h2v2z', fill: '#2496ED' }),
      h('path', { d: 'M21 10.5c0-.39-.04-.77-.13-1.13-.09-.36-.22-.7-.39-1.01-.32-.59-.78-1.08-1.34-1.44-.28-.18-.58-.32-.9-.42-.64-.2-1.32-.2-1.96 0-.32.1-.62.24-.9.42-.56.36-1.02.85-1.34 1.44-.17.31-.3.65-.39 1.01-.09.36-.13.74-.13 1.13v3c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3z', fill: '#2496ED' })
    ]),
    'Vue.js': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('path', { d: 'M2 3h4l6 10 6-10h4L12 21 2 3z', fill: '#4FC08D' }),
      h('path', { d: 'M6 3l6 10 6-10h-4L12 8 10 3H6z', fill: '#35495E' })
    ]),
    'React': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('circle', { cx: '12', cy: '12', r: '2', fill: '#61DAFB' }),
      h('path', { d: 'M12 1c6.5 0 11 2.73 11 6.5S18.5 14 12 14 1 11.27 1 7.5 5.5 1 12 1z', stroke: '#61DAFB', strokeWidth: '2', fill: 'none' }),
      h('path', { d: 'M12 10c6.5 0 11 2.73 11 6.5S18.5 23 12 23 1 20.27 1 16.5 5.5 10 12 10z', stroke: '#61DAFB', strokeWidth: '2', fill: 'none' }),
      h('path', { d: 'M17.5 5.5c-3.25 5.63-3.25 12.87 0 18.5-6.5-3.75-6.5-14.75 0-18.5z', stroke: '#61DAFB', strokeWidth: '2', fill: 'none' }),
      h('path', { d: 'M6.5 5.5c3.25 5.63 3.25 12.87 0 18.5 6.5-3.75 6.5-14.75 0-18.5z', stroke: '#61DAFB', strokeWidth: '2', fill: 'none' })
    ]),
    'TypeScript': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '2', fill: '#3178C6' }),
      h('text', { x: '12', y: '16', textAnchor: 'middle', fill: 'white', fontSize: '10', fontWeight: 'bold' }, 'TS')
    ]),
    'AWS': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('path', { d: 'M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.071-.2.071-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.136-.152-.296-.231-.48-.583.687-1.315 1.031-2.199 1.031-.631 0-1.135-.18-1.518-.543-.383-.36-.575-.84-.575-1.439 0-.64.225-1.151.68-1.534.455-.384 1.062-.575 1.83-.575.255 0 .518.024.798.064.279.048.567.111.862.2v-.463c0-.479-.1-.815-.295-1.007-.2-.191-.535-.287-1.006-.287-.216 0-.44.025-.67.08-.23.056-.454.127-.67.216-.1.04-.175.063-.207.071-.032.009-.056.016-.08.016-.071 0-.104-.048-.104-.151v-.24c0-.08.016-.14.04-.176.032-.04.088-.08.175-.12.216-.112.475-.207.783-.279.304-.08.63-.112.973-.112.742 0 1.286.168 1.635.504.345.336.518.84.518 1.518v2.016zm-3.035 1.135c.248 0 .503-.045.774-.135.27-.088.51-.224.718-.407.128-.112.224-.232.272-.36.048-.127.08-.28.08-.454v-.22c-.224-.063-.463-.12-.718-.159-.255-.04-.503-.056-.742-.056-.527 0-.918.104-1.175.304-.255.2-.383.48-.383.846 0 .351.095.608.287.782.191.176.454.264.807.264zm6.073.463c-.088 0-.152-.016-.2-.056-.047-.04-.087-.12-.118-.24l-1.314-4.319c-.032-.104-.048-.176-.048-.207 0-.08.04-.127.12-.127h.487c.095 0 .16.016.2.056.048.04.08.12.112.24l.942 3.715.863-3.715c.024-.104.056-.184.104-.24.048-.04.12-.056.2-.056h.399c.095 0 .16.016.2.056.048.04.088.12.112.24l.878 3.755.966-3.755c.032-.104.072-.184.112-.24.048-.04.112-.056.2-.056h.463c.08 0 .127.04.127.127 0 .024-.008.056-.016.08-.008.032-.024.08-.048.144l-1.342 4.319c-.032.104-.072.184-.12.24-.047.04-.111.056-.199.056h-.431c-.095 0-.16-.016-.2-.056-.048-.04-.087-.12-.111-.24l-.862-3.595-.854 3.595c-.024.104-.063.184-.111.24-.048.04-.112.056-.2.056h-.431zm7.334.135c-.319 0-.638-.04-.958-.12-.319-.08-.567-.176-.742-.288-.08-.048-.135-.104-.159-.16-.024-.056-.04-.116-.04-.18v-.255c0-.104.04-.16.111-.16.032 0 .064.008.104.024.04.016.095.04.16.072.216.104.448.184.694.24.247.056.487.08.726.08.384 0 .678-.064.886-.2.207-.135.318-.32.318-.566 0-.16-.048-.304-.151-.424-.104-.12-.295-.232-.574-.336l-.822-.256c-.415-.128-.718-.32-.917-.58-.2-.256-.295-.548-.295-.862 0-.248.056-.464.176-.654.12-.2.279-.368.486-.51.207-.144.447-.248.726-.32.279-.08.567-.112.862-.112.144 0 .295.008.44.032.152.024.295.056.431.088.128.04.248.08.359.127.112.048.2.096.264.144.08.064.14.128.167.2.032.071.048.151.048.238v.232c0 .104-.04.16-.112.16-.04 0-.104-.016-.2-.056-.606-.28-1.294-.415-2.067-.415-.36 0-.638.056-.838.175-.2.12-.295.296-.295.535 0 .16.056.304.168.424.111.12.319.24.622.36l.807.256c.407.128.702.32.886.568.184.248.272.536.272.862 0 .256-.056.487-.176.694-.12.207-.287.384-.51.526-.224.144-.487.248-.798.32-.318.08-.654.12-1.006.12z', fill: '#FF9900' })
    ]),
    'Kubernetes': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('path', { d: 'M12 2l9.5 5.5v9L12 22l-9.5-5.5v-9L12 2z', stroke: '#326CE5', strokeWidth: '2', fill: 'none' }),
      h('circle', { cx: '12', cy: '12', r: '3', fill: '#326CE5' }),
      h('path', { d: 'M12 5v2M12 17v2M19 12h-2M7 12H5', stroke: '#326CE5', strokeWidth: '2' })
    ]),
    'MongoDB': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('path', { d: 'M12 2C8.5 2 6 4.5 6 8c0 7 6 12 6 12s6-5 6-12c0-3.5-2.5-6-6-6z', fill: '#4DB33D' }),
      h('path', { d: 'M12 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z', fill: '#3F9E37' })
    ]),
    'Linux': () => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
      h('circle', { cx: '12', cy: '12', r: '10', fill: '#FCC624' }),
      h('path', { d: 'M8 10h8v4H8z', fill: 'black' }),
      h('circle', { cx: '10', cy: '8', r: '1', fill: 'black' }),
      h('circle', { cx: '14', cy: '8', r: '1', fill: 'black' })
    ])
  }

  return icons[tech] || (() => h('svg', { viewBox: '0 0 24 24', fill: 'none', class: 'w-8 h-8' }, [
    h('circle', { cx: '12', cy: '12', r: '10', fill: '#6366F1' }),
    h('rect', { x: '8', y: '8', width: '8', height: '8', rx: '1', fill: 'white' })
  ]))
}
</script>

<style scoped>
.tech-row {
  width: 100%;
  padding: 15px 0;
  mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
  -webkit-mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
  overflow: visible;
}

.marquee-container {
  width: 100%;
  overflow: visible;
  position: relative;
}

.marquee-content {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  width: max-content;
  will-change: transform;
  animation-fill-mode: both;
}

.marquee-right {
  animation: scrollRight 20s linear infinite;
  animation-play-state: running;
}

.marquee-left {
  animation: scrollLeft 25s linear infinite;
  animation-play-state: running;
}

.marquee-right-slow {
  animation: scrollRight 30s linear infinite;
  animation-play-state: running;
}

@keyframes scrollRight {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrollLeft {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

/* WebKit-specific keyframes for better mobile support */
@-webkit-keyframes scrollRight {
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}

@-webkit-keyframes scrollLeft {
  0% {
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}

.tech-card {
  background: rgba(var(--color-secondary-rgb), 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-width: fit-content;
}

.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 107, 0, 0.1), transparent);
  transition: left 0.5s ease;
}

.tech-card:hover::before {
  left: 100%;
}

.tech-card:hover {
  transform: translateY(-8px) scale(1.08);
  border-color: rgba(255, 107, 0, 0.5);
  background: rgba(var(--color-secondary-rgb), 0.95);
  box-shadow: 0 8px 25px rgba(255, 107, 0, 0.2);
  z-index: 30;
}

.tech-card:hover svg {
  filter: drop-shadow(0 2px 4px rgba(255, 107, 0, 0.2));
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .tech-row {
    padding: 8px 0;
  }
  
  .tech-card {
    padding: 0.5rem 0.75rem;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    gap: 0.5rem !important;
  }
  
  .tech-card .w-6 {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .tech-card span {
    font-size: 0.75rem;
  }
  
  .marquee-content {
    gap: 0.75rem;
    animation-play-state: running !important;
    -webkit-animation-play-state: running !important;
  }
  
  .marquee-right {
    animation: scrollRight 12s linear infinite !important;
    animation-play-state: running !important;
    -webkit-animation: scrollRight 12s linear infinite !important;
    -webkit-animation-play-state: running !important;
  }
  
  .marquee-left {
    animation: scrollLeft 15s linear infinite !important;
    animation-play-state: running !important;
    -webkit-animation: scrollLeft 15s linear infinite !important;
    -webkit-animation-play-state: running !important;
  }
  
  .marquee-right-slow {
    animation: scrollRight 18s linear infinite !important;
    animation-play-state: running !important;
    -webkit-animation: scrollRight 18s linear infinite !important;
    -webkit-animation-play-state: running !important;
  }
  
  /* Force animation to continue on mobile */
  .tech-row:hover .marquee-content,
  .tech-row .marquee-content {
    animation-play-state: running !important;
    -webkit-animation-play-state: running !important;
  }
  
  .tech-row:hover .marquee-right,
  .tech-row .marquee-right {
    animation-play-state: running !important;
    -webkit-animation-play-state: running !important;
  }
  
  .tech-row:hover .marquee-left,
  .tech-row .marquee-left {
    animation-play-state: running !important;
    -webkit-animation-play-state: running !important;
  }
  
  .tech-row:hover .marquee-right-slow,
  .tech-row .marquee-right-slow {
    animation-play-state: running !important;
    -webkit-animation-play-state: running !important;
  }
  
  /* Prevent touch scroll interference */
  .marquee-container {
    touch-action: pan-y;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

/* Tablet optimizations */
@media (min-width: 769px) and (max-width: 1024px) {
  .tech-row {
    padding: 10px 0;
  }
  
  .tech-card {
    padding: 0.75rem 1rem;
    gap: 0.5rem;
  }
  
  .tech-card .w-6 {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .tech-card span {
    font-size: 0.875rem;
  }
  
  .marquee-content {
    gap: 1rem;
  }
  
  .marquee-right {
    animation-duration: 25s;
  }
  
  .marquee-left {
    animation-duration: 30s;
  }
  
  .marquee-right-slow {
    animation-duration: 35s;
  }
  
  /* Enable hover pause on tablet */
  .tech-row:hover .marquee-content {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
  }
}

/* Large Desktop/TV optimizations */
@media (min-width: 1025px) and (max-width: 1440px) {
  .tech-row {
    padding: 12px 0;
  }
  
  .tech-card {
    padding: 0.875rem 1.25rem;
    gap: 0.75rem;
  }
  
  .tech-card .w-6 {
    width: 1.75rem;
    height: 1.75rem;
  }
  
  .tech-card span {
    font-size: 0.9rem;
  }
  
  .marquee-content {
    gap: 1.25rem;
  }
  
  .marquee-right {
    animation-duration: 30s;
  }
  
  .marquee-left {
    animation-duration: 35s;
  }
  
  .marquee-right-slow {
    animation-duration: 40s;
  }
}

/* Ultra-wide/4K TV optimizations */
@media (min-width: 1441px) {
  .tech-row {
    padding: 15px 0;
  }
  
  .tech-card {
    padding: 1rem 1.5rem;
    gap: 1rem;
    font-size: 1rem;
  }
  
  .tech-card .w-6 {
    width: 2rem;
    height: 2rem;
  }
  
  .marquee-content {
    gap: 1.5rem;
  }
  
  .marquee-right {
    animation-duration: 35s;
  }
  
  .marquee-left {
    animation-duration: 40s;
  }
  
  .marquee-right-slow {
    animation-duration: 45s;
  }
  
  /* Enhanced hover effects for large screens */
  .tech-card:hover {
    transform: translateY(-10px) scale(1.1);
    box-shadow: 0 12px 35px rgba(255, 107, 0, 0.25);
  }
}

/* Desktop hover pause (769px and above) */
@media (min-width: 769px) {
  .tech-row:hover .marquee-content {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
  }
}
</style>
