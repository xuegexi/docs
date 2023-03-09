---
title: 表达式
order: 6
---

表达式是符号和运算符的一种组合，CnosDB 将处理该组合以获得单个数据值。 
简单表达式可以是一个常量、变量、列或标量函数。 
可以用运算符将两个或更多的简单表达式联接起来组成复杂表达式。

**语法**：
```sql
<expresion> :: = { 
    constant 
    | [ table_name. ] column   
    | scalar_function 
    | ( expression ) 
    | expression { binary_operator } expression   
    | case_when_expression
    | window_function | aggregate_function  
}
```

## 常量
表示单个特定数据值的符号。
详细内容请阅览[常量](data_type.md#常量)

**示例**：
```sql
select 1;
```
    +----------+
    | Int64(1) |
    +----------+
    | 1        |
    +----------+
    
## 标量函数
详细内容请阅览[函数](select_function.md)

## 单目运算符
| 运算符         | 说明                                                |
|-------------|---------------------------------------------------|
| NOT         | 如果子表达式为true，则整个表达式false，如果整个表达式为false，则整个表达式为true |
| IS NULL     | 如果子表达式为null，则整个表达式为true                           |
| IS NOT NULL | 如果子表达式为null，则整个表达式为false                          |

## 二元运算符

二元运算符和两个表达式组合在一起，形成一个新的表达式

支持的二元运算符有:

| 运算符          | 说明                                       |
|--------------|------------------------------------------|
| +            | 数字类型表达式相加                                |
| -            | 数字类型表达式相减                                |
| *            | 数字类型表达式相乘                                |
| /            | 数字类型表达式相除                                |
| %            | 整数类型表达式取余                                |
| &#124;&#124; | 字符串类型表达式拼接                               |
| =            | 比较表达式是否相等                                |
| !=、 <>       | 比较表达式是否不相等                               |
| <            | 比较表达式是否小于                                |
| <=           | 比较表达式是否小于等于                              |
| &gt;         | 比较表达式是否大于                                |
| >=           | 比较表达式是否大于等于                              |
| AND          | 先求左表达式的值，如果为true，计算右表达式的值，都为true为true    | 
| OR           | 先求左表达式的值，如果为false，计算右表达式的值，都为false为false |
| LIKE         | 判断左表达式是否符合右表达式的模式                        |

## `BETWEEN AND` 表达式

**语法**；
```sql
expr BETWEEN expr AND expr
```


**示例**；
```sql
SELECT DISTINCT PRESSURE FROM AIR WHERE PRESSURE BETWEEN 50 AND 60;
```
    +----------+
    | pressure |
    +----------+
    | 52       |
    | 54       |
    | 57       |
    | 50       |
    | 60       |
    | 51       |
    | 56       |
    | 58       |
    | 59       |
    | 53       |
    | 55       |
    +----------+

注意: BETWEEN x AND y 会列出x和y之间的数，包括x和y

## `IN` 表达式

IN 操作符判断列表中是否有值与表达式相等

**示例**：
```sql
SELECT station, temperature, visibility FROM air WHERE temperature  IN (68, 69);
```
    +-------------+-------------+------------+
    | station     | temperature | visibility |
    +-------------+-------------+------------+
    | XiaoMaiDao  | 69          | 56         |
    | LianYunGang | 69          | 78         |
    +-------------+-------------+------------+

**注意**：

IN 列表暂时只支持常量

## `CASE WHEN` 表达式
当表达式需要按照不同情况得不同的值时，可以使用`CASE WHEN`表达式

**语法**：
```sql
CASE
    ( WHEN expression THEN result1 [, ...] )
    ELSE result
END;
```
**示例**：
```sql
SELECT DISTINCT 
    CASE WHEN PRESSURE >= 60 THEN 50 
         ELSE PRESSURE 
    END PRESSURE 
FROM AIR;
```
    +----------+
    | pressure |
    +----------+
    | 52       |
    | 54       |
    | 57       |
    | 50       |
    | 51       |
    | 56       |
    | 58       |
    | 59       |
    | 53       |
    | 55       |
    +----------+

## 窗口函数
详细内容请阅览[窗口函数](window_function.md)

## 聚合函数
详细内容请阅览[聚合函数](aggregate_function.md)


	
## 运算符优先级

如果一个复杂表达式有多个运算符，则运算符优先级将确定操作序列。 执行顺序可能对结果值有明显的影响。

运算符的优先级别如下表中所示。 在较低级别的运算符之前先对较高级别的运算符进行求值。 在下表中，1 代表最高级别，8 代表最低级别。


| 级别  | 运算符                       |
|-----|---------------------------|
| 1   | *（乘）、/（除）、%（取模）           |
| 2   | +（正）、-（负）、+（加）、+（串联）、-（减） |
| 3   | =、>=、<=、<>、!=、>、<（比较运算符）  |
| 4   | NOT                       |
| 5   | AND                       |
| 6   | BETWEEN、IN、LIKE、OR        |

