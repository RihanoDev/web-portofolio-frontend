<template>
  <div class="min-h-screen pt-32 pb-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <!-- Background Decoration -->
          <div class="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

          <div class="relative z-10">
            <h1 class="text-4xl font-bold mb-8 text-primary">{{ $t('terms.title') }}</h1>
            <div class="w-20 h-1 bg-gradient mb-10"></div>

            <div class="space-y-8 text-secondary leading-relaxed text-justify" style="text-justify: inter-word;">
              <section>
                <h2 class="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm">01</span>
                  {{ $t('terms.section1_title') }}
                </h2>
                <p>
                  {{ $t('terms.section1_desc') }}
                </p>
              </section>

              <section>
                <h2 class="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm">02</span>
                  {{ $t('terms.section2_title') }}
                </h2>
                <p>
                  {{ $t('terms.section2_desc') }}
                </p>
              </section>

              <section>
                <h2 class="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm">03</span>
                  {{ $t('terms.section3_title') }}
                </h2>
                <p>
                  {{ $t('terms.section3_desc') }}
                </p>
              </section>

              <div class="pt-8 border-t border-accent/10">
                <p class="text-sm italic">
                  {{ $t('terms.copyright') }}
                </p>
                <router-link to="/" class="inline-flex items-center gap-2 mt-6 text-accent hover:gap-3 transition-all">
                  <i class="fas fa-arrow-left"></i> {{ $t('terms.back_home') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
