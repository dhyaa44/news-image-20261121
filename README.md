# make.fun News Image Generator for 21 November 2026

This repository is for the make.fun bounty [news-image-20261121](https://make.fun/bounty/news-image-20261121). It generates a single-image world-news summary.

The image covers these stories:

- Iran-US threats and Strait of Hormuz tanker strikes
- Gaza food-truck airstrike
- Global student climate strike across 25 countries
- Spain's banking tax extension before the 29 November election
- The al-Hartha power station fire near Basra
- The magnitude 6.8 Peru earthquake
- Denmark expelling a Russian defence attache
- Merz's 360-degree partnership with Qatar
- UN killer-robots talks
- Sinaloa cartel firefight
- Manipur spurious liquor deaths
- COP31 overtime in Turkiye
- The death of Phumzile Mlambo-Ngcuka

## How to Run

```bash
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The generated image is saved as `out/entry.png`.

## License

MIT license - see the [LICENSE](LICENSE) file.