import type { Article, ArticleListItem, ArticleTag, ArticleCategory } from "../types/article";
import {  API_BASE_URL , apiFetch } from "./config";

export async function fetchArticles(): Promise<ArticleListItem[]> {
  try {
    const response = await apiFetch(`${API_BASE_URL}/articles`);

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    const data = await response.json();

    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data;
    const articles = Array.isArray(responseData?.data) ? responseData.data : Array.isArray(responseData) ? responseData : [];

    return articles;
  } catch (error) {
    
    return [];
  }
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await apiFetch(`${API_BASE_URL}/articles/slug/${slug}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch article with slug: ${slug}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    
    return null;
  }
}

export async function fetchArticlesByCategory(slug: string): Promise<ArticleListItem[]> {
  try {
    const response = await apiFetch(`${API_BASE_URL}/articles/category/${slug}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch articles for category: ${slug}`);
    }

    const data = await response.json();

    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data;
    const articles = Array.isArray(responseData?.data) ? responseData.data : Array.isArray(responseData) ? responseData : [];

    return articles;
  } catch (error) {
    
    return [];
  }
}

export async function fetchArticlesByTag(name: string): Promise<ArticleListItem[]> {
  try {
    const response = await apiFetch(`${API_BASE_URL}/articles/tag/${name}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch articles for tag: ${name}`);
    }

    const data = await response.json();

    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data;
    const articles = Array.isArray(responseData?.data) ? responseData.data : Array.isArray(responseData) ? responseData : [];

    return articles;
  } catch (error) {
    
    return [];
  }
}

export async function fetchArticleCategories(): Promise<ArticleCategory[]> {
  try {
    const response = await apiFetch(`${API_BASE_URL}/categories`);

    if (!response.ok) {
      throw new Error("Failed to fetch article categories");
    }

    const data = await response.json();

    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data;
    const categories = Array.isArray(responseData?.data) ? responseData.data : Array.isArray(responseData) ? responseData : [];

    return categories;
  } catch (error) {
    
    return [];
  }
}

export async function fetchArticleTags(): Promise<ArticleTag[]> {
  try {
    const response = await apiFetch(`${API_BASE_URL}/tags`);

    if (!response.ok) {
      throw new Error("Failed to fetch article tags");
    }

    const data = await response.json();

    // Handle paginated response format: { data: { data: [...], pagination: {...} } }
    const responseData = data.data;
    const tags = Array.isArray(responseData?.data) ? responseData.data : Array.isArray(responseData) ? responseData : [];

    return tags;
  } catch (error) {
    
    return [];
  }
}

// Track article view
export async function trackArticleView(articleId: string): Promise<void> {
  try {
    const response = await apiFetch(`${API_BASE_URL}/analytics/track`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "article_view",
        entityId: articleId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to track article view for ID: ${articleId}`);
    }
  } catch (error) {
    
  }
}
