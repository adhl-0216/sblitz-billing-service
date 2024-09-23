# sblitz-billing-service

| ID  | Requirement Name                                                    | Category | Acceptance Criteria |
| --- | ------------------------------------------------------------------- | -------- | ------------------- |
| 01  | As a User, I want to view all my Bills                              | Bill     |                     |
| 02  | As a User, I want to create a new Bill                              | Bill     | -                   |
| 03  | As a User, I want to add an existing Friend to a Bill               | Bill     | -                   |
| 04  | As a User, I want to add a custom Friend to a Bill                  | Bill     | -                   |
| 05  | As a User, I want to add a new Item in a Bill                       | Bill     | -                   |
| 06  | As a User, I want to assign an Item to any Friend added to the Bill | Bill     | -                   |

# ERD

```mermaid
erDiagram
    BILL ||--|{ ITEM : "has many"
    BILL }|--|{ MEMBER : contains
    BILL {
        string id
        Member[] members
        Item[] items
    }
    ITEM ||--|{ MEMBER : "is assigned to"
    ITEM {
        string id
        string description
        number price
        number quantity
        Member[] assignees
        SplitType splitType
    }
    MEMBER {
        string name
        string id
        string color
        number total
    }
    ITEM ||--|{ SPLIT_TYPE : "is split by"
    SPLIT_TYPE {
        string name
        string id
        string color
        number total
    }

```
