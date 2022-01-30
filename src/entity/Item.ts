import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity} from "typeorm";

/**
* @author Pierre Dahmani
* @created 30.01.2022
* @file Our minimal entity which is used to display an entry in our shopping
* list.
*/

@Entity()
// Extending BaseEntity to enable ActiveRecord pattern (doing action on our
// model rather than defining a repo).
export class Item extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @Column()
    // Most important column, contains the text of our item. e.g. "banana" or
    // "apple".
    text: string

    @Column({default: false})
    // Means the item was bought (or not).
    // MAYBE(pierre): could consider introducing a separate state entity with
    // user defiend states one day.
    isDone: boolean

    @Column({default: 1})
    quantity: number;

    @Column({nullable: true})
    // optional link to the item e.g. in amazon or at a supermarket homepage.
    referenceLink: string

    // MAYBE(pierre): either store link to a thumbnail or potentially allow
    // uploading images. but this opens a big bucket.
    // @Column()
    // imageLink:
}

