import { pgTable, serial, text, boolean, integer, customType, timestamp,  } from "drizzle-orm/pg-core";

const bytea = customType<{
    data: Buffer;
    driverData: Buffer;
  }>({
    dataType: () => 'bytea',
  });


export const users = pgTable("users",{
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('passowrd').notNull(),
    resetPassword: text('reset password').notNull()
})

export const masterItems = pgTable("masterItems",{
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    type: text('type').notNull(),
    is_veg: boolean('is veg').default(true),
    image: bytea("image"),
    creator_id: integer('creator_id').references(()=> users.id )
})

export const masterStatus = pgTable("masterStatus",{
    id: serial('id').primaryKey(),
    name: text('name').notNull()
})

export const Order = pgTable("Order",{
    id: serial('id').primaryKey(),
    item_id: integer('item_id').notNull().references(()=> masterItems.id),
    user_id: integer('user_id').references(()=> users.id ),
    order_from: text('order_from'),
    quantity: integer('quantity'),
    staus: integer('status').references(()=> masterStatus.id),
    price: integer('price').default(1),
    created_at: timestamp().defaultNow()
})