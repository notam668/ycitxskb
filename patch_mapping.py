# -*- coding: utf-8 -*-
"""Patch script to update college-major mapping in extract_data.py"""
import sys
sys.stdout.reconfigure(encoding='utf-8')

filepath = r'D:\盐工课表\盐工课表查询系统\extract_data.py'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_mapping = r'''# 学院-专业映射（根据盐城工学院2026级本科招生官方学院设置）
COLLEGE_MAJOR_MAP = {
    "机械工程学院": [
        "机械设计制造及其自动化", "机械设计制造及其自动化（国际合作）",
        "机械设计制造及其自动化（中职高考）", "机械电子工程",
        "过程装备与控制工程", "智能制造工程", "智能制造工程（3+4）", "机械大类",
    ],
    "化学化工学院": [
        "化学工程与工艺", "化学工程与工艺（中职高考）", "应用化学",
        "制药工程", "化工安全工程", "应急技术与管理", "能源化学", "储能科学与工程",
    ],
    "经济管理学院": [
        "工商管理", "会计学", "会计学（中职高考）", "财务管理",
        "国际经济与贸易", "金融工程", "应急管理", "大数据管理与应用",
        "市场营销(中职高考)", "经管大类",
    ],
    "电气工程学院": [
        "电气工程及其自动化", "电气工程及其自动化（国际合作）",
        "自动化", "新能源科学与工程", "智能装备与系统", "机器人工程",
    ],
    "人文社会科学学院": ["汉语言文学", "旅游管理"],
    "设计艺术学院": [
        "视觉传达设计", "视觉传达设计（中职高考）",
        "环境设计", "环境设计（中职高考）", "产品设计", "服装与服饰设计",
    ],
    "材料科学与工程学院": [
        "材料科学与工程", "新能源材料与器件", "高分子材料与工程",
        "金属材料工程", "材料化学", "交通工程",
    ],
    "土木工程学院": [
        "土木工程（智慧城市实验班）", "工程管理", "工程管理（中职高考）",
        "工程管理（3+4）", "城市地下空间工程（数智实验班）",
        "给排水科学与工程", "智能建造",
    ],
    "纺织服装学院": [
        "纺织工程", "轻化工程", "服装设计与工程",
        "服装设计与工程（中职高考）", "生物质技术与工程",
    ],
    "信息工程学院": [
        "电子信息工程", "计算机科学与技术", "计算机科学与技术（中职高考）",
        "网络工程", "软件工程", "人工智能", "光电信息科学与工程", "电信大类",
    ],
    "汽车工程学院": [
        "车辆工程（与江苏悦达集团有限公司联合培养）",
        "新能源汽车工程", "新能源汽车工程（中职高考）",
        "能源与动力工程", "智能科学与技术", "汽车服务工程（3+4）",
    ],
    "环境科学与工程学院": ["环境工程", "环境科学", "环保设备工程"],
    "外国语学院": ["英语"],
    "海洋与生物工程学院": [
        "海洋科学", "海洋技术", "生物工程",
        "食品科学与工程", "食品质量与安全", "水生动物医学",
    ],
    "数理学院": ["应用物理学", "应用统计学", "数据科学与大数据技术"],
    "化生材料大类": ["化生材料类"],
    "研究生院": ["Y研究生"],
    "预科教育": ["民族预科（文科）", "民族预科（理科）"],
}

def find_college(major_name):
    """根据专业名找到对应学院"""
    for college, majors in COLLEGE_MAJOR_MAP.items():
        for m in majors:
            if m == major_name:
                return college
    for college, majors in COLLEGE_MAJOR_MAP.items():
        for m in majors:
            if m in major_name or major_name in m:
                return college
    if "车辆" in major_name:
        return "汽车工程学院"
    if "研究生" in major_name or major_name.startswith("Y"):
        return "研究生院"
    if "预科" in major_name:
        return "预科教育"
    return "其他"

'''

old_start = content.find('# 学院-专业映射')
old_end = content.find('\ndef parse_schedule_page')

if old_start == -1 or old_end == -1:
    print(f'ERROR: markers not found. start={old_start}, end={old_end}')
    # Try alternate
    old_end = content.find('def parse_schedule_page')
    if old_end == -1:
        print('ERROR: Could not find parse_schedule_page')
        sys.exit(1)

new_content = content[:old_start] + new_mapping + content[old_end:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('SUCCESS: College mapping updated!')
print(f'File size: {len(new_content)} bytes')
