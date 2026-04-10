# Changelog

## [0.2.3] - 2026-04-10

### Added
- **侧边栏预设拖拽排序：** 支持直接在左侧预设列表通过拖拽改变顺序，无需额外编辑模式。
- **无感交互判定：** 设置 5 像素位移阈值，完美区分“点击选择”与“拖拽排序”。
- **增强视觉反馈：** 为拖拽操作添加 iOS 风格的放大效果、动态阴影及 `grab`/`grabbing` 光标。

### Fixed
- 修复了预设项在某些比例下文字截断的问题。
- 优化了由于不当导入导致的编译警告和潜在运行时错误。

## [0.2.2] - 2026-04-10

### Added
- 支持全系列 KV 缓存量化格式，包括 f32, bf16, iq4_nl。
- 深度集成支持 turbo4, turbo3, turbo2 量化格式，显著优化显存占用。

### Fixed
- 优化下拉框 (Select) UI 样式，提升在暗色模式下的对比度与文字清晰度。
- 统一交互体验，为下拉框添加 iOS 风格的聚焦光晕与悬停效果。

## [0.2.1] - 2026-04-06

### Added
- iOS-style UI redesign (Floating Island layout).
- High-quality Glassmorphism with Blur and Saturation.
- Terminal UI refinement (Unified Glass style).
- Full Light/Dark theme support with iOS-native color palette.
- Improved layout spacing and border radii.
