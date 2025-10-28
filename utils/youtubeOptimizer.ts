// 匹配 src 属性值，兼容单引号、双引号或转义引号
// 捕获组 1: src=" 或 src=' 或 src=\" 等，以及 iframe 标签的起始部分
// 捕获组 2: 引号： " 或 '
// 捕获组 3: 实际的 URL 值 (我们最需要的部分)
// 捕获组 4: 引号： " 或 '
// 捕获组 5: 属性的剩余部分直到 >
const IFRAME_SRC_REGEX = /(<iframe[^>]*\s+src=)(["'])([^"']*?)(\2)([^>]*>)/gi;

/**
 * 从 YouTube 嵌入 URL 中提取视频 ID
 * @param url 完整的 YouTube URL
 * @returns 视频 ID (如 'APn87e4VIDI') 或 null
 */
function getYouTubeVideoId(url: string): string | null {
// 匹配 ID 的正则表达式：在 ID 之后必须是 ?、&、# 符号或字符串的结尾
  const embedMatch = url.match(
    /(?:youtube\.com\/(?:embed|v|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[?&#]|$)/
  );

  if (embedMatch && embedMatch[1]) {
    return embedMatch[1];
  }
  
  // 针对您的精确 URL 格式，使用更简单的匹配
  const simpleEmbedMatch = url.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
  if (simpleEmbedMatch && simpleEmbedMatch[1]) {
    return simpleEmbedMatch[1];
  }
  
  return null;
}


/**
 * 将富文本中的 YouTube <iframe> 替换为 srcdoc 优化的结构。
 * @param html 富文本 HTML 字符串
 * @returns 替换后的 HTML 字符串
 */
export function lazyLoadIframes(html?: string | null): string {
  if (!html || typeof html !== 'string') {
    return html || '';
  }

  const youtubeIframeRegex = /<iframe.*?src=".*?youtube\.com\/embed\/.*?".*?><\/iframe>/g;
  return html.replace(youtubeIframeRegex, (iframeHtml) => {
      // 对于每个匹配到的 iframe HTML 字符串，我们从中提取视频 ID
      const videoIdMatch = iframeHtml.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
      // 如果成功匹配到视频 ID
      if (videoIdMatch && videoIdMatch[1]) {
        const videoId = videoIdMatch[1];

        // 构建轻量级的 srcdoc 内容
        const srcdocContent = `
          <style>
            * { padding: 0; margin: 0; overflow: hidden; }
            html, body { height: 100%; }
            img, span { position: absolute; width: 100%; top: 0; bottom: 0; margin: auto; }
            span { height: 1.5em; text-align: center; font: 48px/1.5 sans-serif; color: white; text-shadow: 0 0 0.5em black; cursor: pointer; }
            a { display: block; width: 100%; height: 100%; }
          </style>
          <a href='https://www.youtube.com/embed/${videoId}?autoplay=1'>
            <img src='https://img.youtube.com/vi/${videoId}/maxresdefault.jpg' alt='视频缩略图'>
            <span>▶</span>
          </a>
        `.replace(/\s\s+/g, ' ').replace(/"/g, "'"); // 压缩空白并将双引号替换为单引号

        // ==================================================================
        // 关键修正点：
        // 使用 replace 方法将 srcdoc 属性安全地插入到第一个 ">" 之前。
        // String.prototype.replace 只带字符串参数时，仅替换第一个匹配项。
        // ==================================================================
        return iframeHtml.replace('>', ` srcdoc="${srcdocContent}">`);
      }
      return iframeHtml;
  })
  
}